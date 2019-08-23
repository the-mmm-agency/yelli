import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { ThemeProp } from 'types'

import { between } from 'util/theme'
import { css } from '@emotion/core'
import { down } from 'util/theme'
import { isNil } from 'ramda'
import { up } from 'util/theme'

interface Breakpoints {
  up?: Breakpoint
  down?: Breakpoint
  between?: {
    upper: Breakpoint
    lower: Breakpoint
  }
}

const getBreakpoint = (breakpoint: Breakpoints) => (
  props: ThemeProp
) => {
  if (!isNil(breakpoint.up)) {
    return up(breakpoint.up)(props)
  } else if (!isNil(breakpoint.down)) {
    return down(breakpoint.down)(props)
  } else if (!isNil(breakpoint.between)) {
    return between(
      breakpoint.between.upper,
      breakpoint.between.lower
    )(props)
  }
}

export const hiddenButton = (hidden: boolean) =>
  hidden
    ? css`
        opacity: 0;
        pointer-events: none;
      `
    : null

export const hidden = (breakpoint: Breakpoints) => props =>
  css`
    ${getBreakpoint(breakpoint)(props)} {
      display: none;
    }
  `
