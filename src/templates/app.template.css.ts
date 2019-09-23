import {
  Button,
  Divider as MuiDivider,
} from '@material-ui/core'
import Img from 'gatsby-image'

import AppIcon from 'src/components/appIcon'
import HorizontalScroll from 'src/components/horizontalScroll'
import styled from 'src/util/styled'
import {
  borders,
  pxToRem,
  radii,
  spacing,
  up,
} from 'src/util/theme'

export const Divider = styled(MuiDivider)`
  margin-bottom: ${spacing(2)};
`

export const LaunchApp = styled(Button).attrs({
  color: 'primary',
  size: 'small',
  variant: 'outlined',
})`
  span {
    svg {
      width: 1.5em;
      height: 1.5em;
    }
    margin-top: auto;
    font-size: ${pxToRem(13)};
  }
`

export const Icon = styled(AppIcon)`
  flex-grow: 1;
  flex-shrink: 0;
  max-width: ${spacing(14)};
  height: ${spacing(14)};
  margin: ${spacing(2, 2, 0)};
`

export const Screenshots = styled(HorizontalScroll)`
  &::after {
    min-width: ${spacing(2)};
  }
  padding-inline-start: ${spacing(4)};
`

export const Screenshot = styled(Img)`
  ${up('md')} {
    width: 25vw;
    height: auto;
    max-width: 400px;
  }
  width: 200px;
  height: 355px;
  margin-right: ${spacing(2)};
  margin-bottom: ${spacing(3)};
  border: ${borders('standard')};
  ${radii('heavy')};
`
