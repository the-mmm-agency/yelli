import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { isNil } from 'ramda'
import {
  FlattenInterpolation,
  SimpleInterpolation,
} from 'styled-components'

import { ThemeProp } from 'src/types'
import { css } from 'src/util/styled'
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
): SimpleInterpolation | null =>
  hidden
    ? css`
        opacity: 0;
        pointer-events: none;
      `
    : null

export const hidden = (breakpoint: Breakpoints) => (
  props: ThemeProp
): FlattenInterpolation<ThemeProp> =>
  css`
    ${getBreakpoint(breakpoint)(props)} {
      display: none;
    }
  `
