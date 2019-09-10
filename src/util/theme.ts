import { SerializedStyles, css } from '@emotion/core'
import { fade as muiFade } from '@material-ui/core/styles/colorManipulator'
import {
  Breakpoint,
  keys as breakpoints,
} from '@material-ui/core/styles/createBreakpoints'
import {
  Borders,
  Radii,
  Sizes,
  Theme,
} from '@material-ui/core/styles/createMuiTheme'
import { Palette } from '@material-ui/core/styles/createPalette'
import { Typography } from '@material-ui/core/styles/createTypography'
import { ZIndex } from '@material-ui/core/styles/zIndex'
import facepaint from 'facepaint'
import { has, path, prop, propOr } from 'ramda'

import { ThemeProp } from 'src/types'
import dotPath from 'src/util/dotPath'

const createAccessor = (key: keyof Theme) => (
  value: string
) => (props: ThemeProp): string =>
  dotPath(value, path(['theme', key], props))

export const transitions = (
  value: string | string[],
  options: Partial<{
    duration: number | string
    easing: string
    delay: number | string
  }> = {}
) => ({ theme: { transitions } }: ThemeProp) => {
  const getOption = (
    key: 'duration' | 'easing',
    fallback: string
  ): string => {
    const obj = prop(key, transitions)
    if (has(key, options)) {
      const option = prop(key, options) as string
      return propOr(option, option, obj)
    }
    return propOr(fallback, fallback, obj)
  }

  const transition = transitions.create(value, {
    delay: propOr(0, 'delay', options),
    duration: getOption('duration', 'standard'),
    easing: getOption('easing', 'easeInOut'),
  })
  return css`
    transition: ${transition};
  `
}

type ThemeFunc<T> = (props: ThemeProp) => T
type ValueFunc<T, K> = (value: keyof T) => ThemeFunc<K>
type FlexibleAccessor<T> = (
  value: keyof T | string
) => ThemeFunc<string>
type Accessor<T> = ValueFunc<T, string>
type CssAccessor<T> = ValueFunc<T, SerializedStyles>

export const shadows = (index: number) => (
  props: ThemeProp
): SerializedStyles => css`
  box-shadow: ${props.theme.shadows[index]};
`

export const borders: Accessor<Borders> = createAccessor(
  'borders'
)
export const palette: FlexibleAccessor<
  Palette
> = createAccessor('palette')
export const sizes: Accessor<Sizes> = createAccessor(
  'sizes'
)
export const radii: CssAccessor<
  Radii
> = value => props => css`
  border-radius: ${createAccessor('radii')(value)(props)}px;
`
export const typography: FlexibleAccessor<
  Typography
> = createAccessor('typography')

export const zIndex: CssAccessor<
  ZIndex
> = value => props => css`
  z-index: ${createAccessor('zIndex')(value)(props)};
`

export const spacing = (...args: number[]) => (
  props: ThemeProp
): string =>
  args.map(x => `${props.theme.spacing(x)}px`).join(' ')

type MediaQuery = (value: Breakpoint) => ThemeFunc<string>

export const up: MediaQuery = value => props =>
  props.theme.breakpoints.up(value)

export const down: MediaQuery = value => props =>
  props.theme.breakpoints.down(value)

type Between = (
  lower: Breakpoint,
  upper: Breakpoint
) => ThemeFunc<string>

export const between: Between = (lower, upper) => props =>
  props.theme.breakpoints.between(lower, upper)

type Fade = (
  color: keyof Palette | string,
  amount: number
) => ThemeFunc<string>

export const fade: Fade = (color, amount) => props =>
  muiFade(
    createAccessor('palette')(color)(props) as string,
    amount
  )

type Mq = (
  value: Record<string, any> | Record<string, any>[]
) => ThemeFunc<
  facepaint.DynamicStyle | facepaint.DynamicStyleFunction
>

export const mq: Mq = value => props =>
  facepaint(
    breakpoints.map((key: Breakpoint): string =>
      props.theme.breakpoints.up(key)
    )
  )(value)
