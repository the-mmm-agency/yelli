import { Divider as MuiDivider } from '@material-ui/core'
import styled from '@emotion/styled'
import Img from 'graphcms-image'

import AppIcon from 'components/appIcon'
import HorizontalScroll from 'components/horizontalScroll'
import { borders, spacing, up } from 'util/theme'

export const Divider = styled(MuiDivider)`
  margin-bottom: ${spacing(2)};
`

export const Icon = styled(AppIcon)`
  flex-grow: 1;
  margin: ${spacing(2, 2, 0)};
  height: ${spacing(14)};
  width: ${spacing(14)};
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
    height: 45vw;
    width: 25vw;
  }
  border: ${borders('standard')};
  border-radius: 15px;
  margin-right: ${spacing(2)};
  margin-bottom: ${spacing(3)};
  height: 355px;
  width: 200px;
`
