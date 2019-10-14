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
import {
  Duration,
  Easing,
} from '@material-ui/core/styles/transitions'
import { ZIndex } from '@material-ui/core/styles/zIndex'
import facepaint from 'facepaint'
import { path } from 'ramda'
import { FlattenInterpolation } from 'styled-components'

import { ThemeProp } from 'src/types'
import dotPath from 'src/util/dotPath'
import { css } from 'src/util/styled'

type PropFunc<T = string> = (props: ThemeProp) => T

interface Accessor<T> {
  (value: keyof T): PropFunc
  (value: string): PropFunc
}

const createAccessor = <T>(
  key: keyof Theme
): Accessor<T> => (
  value: keyof T | string
): PropFunc => props =>
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

interface TransitionOptions {
  easing: keyof Easing | string
  duration: keyof Duration | number | string
  delay: number | string
}

type Transitions = (
  value: string | string[],
  options?: Partial<TransitionOptions>
) => PropFunc<Css>

export const transitions: Transitions = (
  value,
  options = {}
) => ({ theme: { transitions } }) => {
  const {
    delay = 0,
    duration = 'standard',
    easing = 'easeInOut',
  } = options
  const transition = transitions.create(value, {
    delay,
    duration:
      transitions.duration[duration as keyof Duration] ||
      duration,
    easing:
      transitions.easing[easing as keyof Easing] || easing,
  })
  return css`
    transition: ${transition};
  `
}

// Theme Functions
export const pxToRem = (px: number): PropFunc => props =>
  props.theme.typography.pxToRem(px)

export const spacing = (...args: number[]): PropFunc => ({
  theme,
}) => args.map(x => `${theme.spacing(x)}px`).join(' ')

type MediaQuery = (value: Breakpoint) => PropFunc

export const up: MediaQuery = value => ({
  theme: { breakpoints },
}) => breakpoints.up(value)

export const down: MediaQuery = value => ({
  theme: { breakpoints },
}) => breakpoints.down(value)

type Between = (
  lower: Breakpoint,
  upper: Breakpoint
) => PropFunc<string>

export const between: Between = (lower, upper) => ({
  theme: { breakpoints },
}) => breakpoints.between(lower, upper)

const paletteFunc = <T>(
  func: (color: string, value: T) => string
) => (
  color: keyof Palette | string,
  value: T
): PropFunc<string> => props =>
  func(palette(color)(props), value)

export const fade = paletteFunc<number>(muiFade)
export const darken = paletteFunc<number>(muiDarken)
export const lighten = paletteFunc<number>(muiLighten)

type Mq = (
  value: Record<string, any> | Record<string, any>[]
) => PropFunc<facepaint.DynamicStyle[]>

export const mq: Mq = value => props =>
  facepaint(
    breakpoints.map((key: Breakpoint): string =>
      props.theme.breakpoints.up(key)
    )
  )(value)
