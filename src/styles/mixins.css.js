import { css } from '@emotion/core'
import { isNil } from 'ramda'

import { up, down, between } from 'util/theme'

const getBreakpoint = breakpoint => props => {
  if (!isNil(breakpoint.up)) {
    return up(breakpoint.up)(props)
  } else if (!isNil(breakpoint.down)) {
    return down(breakpoint.down)(props)
  } else if (!isNil(breakpoint.between)) {
    return between(breakpoint.between)(props)
  }
}

export const hidden = breakpoint => props =>
  css`
    ${getBreakpoint(breakpoint)(props)} {
      display: none;
    }
  `
