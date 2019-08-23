import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { ThemeProp } from 'types'

import { css } from '@emotion/core'
import { fade as muiFade } from '@material-ui/core/styles/colorManipulator'
import { has } from 'ramda'
import { keys as breakpoints } from '@material-ui/core/styles/createBreakpoints'
import { path } from 'ramda'
import { prop } from 'ramda'
import { propOr } from 'ramda'

import dotPath from 'util/dotPath'
import facepaint from 'facepaint'

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
    easing: getOption('easing', 'easeInOut'),
    delay: propOr(0, 'delay', options),
    duration: getOption('duration', 'standard'),
  })
  return css`
    transition: ${transition};
  `
}

export const borders = createAccessor('borders')
export const palette = createAccessor('palette')
export const sizes = createAccessor('sizes')
export const radii = (value: string) => (
  props: ThemeProp
) => css`
  border-radius: ${createAccessor('radii')(value)(props)}px;
`

export const zIndex = (value: keyof Theme['zIndex']) => (
  props: ThemeProp
) => css`
  z-index: ${createAccessor('zIndex')(value)(props)};
`

export const typography = createAccessor('typography')

export const spacing = (...args: number[]) => (
  props: ThemeProp
): string =>
  args.map(x => `${props.theme.spacing(x)}px`).join(' ')

type MediaQuery = (
  value: Breakpoint
) => (props: ThemeProp) => string

export const up: MediaQuery = value => props =>
  props.theme.breakpoints.up(value)

export const down: MediaQuery = value => props =>
  props.theme.breakpoints.down(value)

export const between = (
  lower: Breakpoint,
  upper: Breakpoint
) => (props: ThemeProp): string =>
  props.theme.breakpoints.between(lower, upper)

export const fade = (color: string, amount: number) => (
  props: ThemeProp
) =>
  muiFade(
    createAccessor('palette')(color)(props) as string,
    amount
  )

export const mq = (value: Object | Object[]) => (
  props: ThemeProp
) =>
  facepaint(
    breakpoints.map((key: Breakpoint): string =>
      props.theme.breakpoints.up(key)
    )
  )(value)
