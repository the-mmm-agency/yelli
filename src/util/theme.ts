import {
  darken as muiDarken,
  fade as muiFade,
  lighten as muiLighten,
} from '@material-ui/core/styles/colorManipulator'
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
import { FlattenInterpolation } from 'styled-components'

import { ThemeProp } from 'src/types'
import dotPath from 'src/util/dotPath'
import { css } from 'src/util/styled'

// Theme Accessors
type ThemeFunc<T> = (props: ThemeProp) => T

const createAccessor = <T>(key: keyof Theme) => (
  value: keyof T | string
): ThemeFunc<string> => props =>
  dotPath(value, path(['theme', key], props))

type Css = FlattenInterpolation<ThemeProp>
type CssFunc<T> = (value: T) => Css

type CssAccessor<T> = CssFunc<keyof T>

export const borders = createAccessor<Borders>('borders')
export const palette = createAccessor<Palette>('palette')
export const sizes = createAccessor<Sizes>('sizes')
export const typography = createAccessor<Typography>(
  'typography'
)
export const shadows: CssFunc<number> = value => css`
  box-shadow: ${(props): string =>
    props.theme.shadows[value]};
`
export const radii: CssAccessor<Radii> = value => css`
  border-radius: ${createAccessor('radii')(value)}px;
`
export const zIndex: CssAccessor<ZIndex> = value => css`
  z-index: ${createAccessor('zIndex')(value)};
`

type Transitions = (
  value: string | string[],
  options?: Partial<{
    duration: number | string
    easing: string
    delay: number | string
  }>
) => ThemeFunc<Css>
export const transitions: Transitions = (
  value,
  options = {}
) => ({ theme: { transitions } }) => {
  type GetOption = (
    key: 'duration' | 'easing',
    fallback: string
  ) => string
  const getOption: GetOption = (key, fallback) => {
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

// Theme Functions
export const pxToRem = (
  px: number
): ThemeFunc<string> => props =>
  props.theme.typography.pxToRem(px)
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

const paletteFunc = <T>(
  func: (color: string, value: T) => string
) => (
  color: keyof Palette | string,
  value: T
): ThemeFunc<string> => props =>
  func(palette(color)(props), value)

export const fade = paletteFunc<number>(muiFade)
export const darken = paletteFunc<number>(muiDarken)
export const lighten = paletteFunc<number>(muiLighten)

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
