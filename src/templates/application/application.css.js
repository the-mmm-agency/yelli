import styled from '@emotion/styled'
import { Divider as MuiDivider } from '@material-ui/core'
import AppIcon from 'components/appIcon'
import HorizontalScroll from 'components/horizontalScroll'
import Img from 'graphcms-image'
import { borders, radii, spacing, up } from 'util/theme'

export const Divider = styled(MuiDivider)`
  margin-bottom: ${spacing(2)};
`

export const Icon = styled(AppIcon)`
  flex-grow: 1;
  width: ${spacing(14)};
  height: ${spacing(14)};
  margin: ${spacing(2, 2, 0)};
`

export const Screenshots = styled(HorizontalScroll)`
  &::after {
    min-width: ${spacing(2)};
  }
  padding-inline-start: ${spacing(4)};
  scroll-padding-inline-start: ${spacing(4)};
`

export const Screenshot = styled(Img)`
  ${up('md')} {
    width: 25vw;
    height: 45vw;
  }
  width: 200px;
  height: 355px;
  margin-right: ${spacing(2)};
  margin-bottom: ${spacing(3)};
  border: ${borders('standard')};
  border-radius: ${radii('image')};
`
