import {
  Button,
  Divider as MuiDivider,
} from '@material-ui/core'
import Img from 'gatsby-image'

import AppIcon from 'src/components/appIcon'
import HorizontalScroll from 'src/components/horizontalScroll'
import styled from 'src/util/styled'
import { borders, radii, spacing, up } from 'src/util/theme'

export const Divider = styled(MuiDivider)`
  margin-bottom: ${spacing(2)};
`

export const LaunchApp = styled(Button).attrs({
  color: 'primary',
  size: 'small',
  variant: 'outlined',
})`
  width: 10rem;
  margin-top: auto;
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
    max-width: 400px;
    height: auto;
  }
  width: 200px;
  height: 355px;
  margin-right: ${spacing(2)};
  margin-bottom: ${spacing(3)};
  border: ${borders('standard')};
  ${radii('heavy')};
`
