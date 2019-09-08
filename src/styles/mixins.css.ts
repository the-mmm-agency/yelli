import { SerializedStyles, css } from '@emotion/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { isNil } from 'ramda'

import { ThemeProp } from 'src/types'
import { between, down, up } from 'src/util/theme'

type Breakpoints = {
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

export const hiddenButton = (
  hidden: boolean
): SerializedStyles | null =>
  hidden
    ? css`
        opacity: 0;
        pointer-events: none;
      `
    : null

export const hidden = (breakpoint: Breakpoints) => (
  props: ThemeProp
): SerializedStyles =>
  css`
    ${getBreakpoint(breakpoint)(props)} {
      display: none;
    }
  `
