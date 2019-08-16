import { css } from '@emotion/core'
import { fade as muiFade } from '@material-ui/core/styles/colorManipulator'
import facepaint from 'facepaint'
import {
  curry,
  identity,
  memoizeWith,
  prop,
  propOr,
} from 'ramda'
import { theme } from 'styled-tools'

const propOrProp = curry((obj1, obj2, val, fallback) =>
  prop(propOr(fallback, val, obj1), prop(obj2, val))
)

const createAccessor = memoizeWith(
  identity,
  curry(key => val => theme(`${key}.${val}`))
)

export const transitions = (value, options = {}) => ({
  theme: { transitions },
}) => {
  const option = propOrProp(options, transitions)
  const transition = transitions.create(value, {
    duration: option('duration', 'standard'),
    easing: option('easing', 'easeInOut'),
  })
  return css`
    transition: ${transition};
  `
}
export const borders = createAccessor('borders')
export const palette = createAccessor('palette')
export const sizes = createAccessor('sizes')
export const radii = createAccessor('radii')
export const shape = theme('shape')
export const zIndex = theme('zIndex')
export const typography = createAccessor('typography')

export const spacing = (...args) => props =>
  args.map(x => `${props.theme.spacing(x)}px`).join(' ')

export const up = value => props =>
  props.theme.breakpoints.up(value)

export const down = value => props =>
  props.theme.breakpoints.down(value)

export const between = (lower, upper) => props =>
  props.theme.breakpoints.between(lower, upper)

export const fade = (color, amount) => props =>
  muiFade(theme(`palette.${color}`)(props), amount)

export const mq = value => props =>
  facepaint([
    props.theme.breakpoints.up('xs'),
    props.theme.breakpoints.up('sm'),
    props.theme.breakpoints.up('md'),
    props.theme.breakpoints.up('lg'),
    props.theme.breakpoints.up('xl'),
  ])(value)
