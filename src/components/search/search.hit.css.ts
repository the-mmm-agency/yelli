import { ListItem as MuiListItem } from '@material-ui/core'
import Img from 'gatsby-image'

import styled from 'src/util/styled'
import {
  fade,
  palette,
  radii,
  spacing,
} from 'src/util/theme'

export const Icon = styled(Img)`
  width: 50px;
  height: 50px;
  margin-right: ${spacing(3)};
  img {
    ${radii('image')};
  }
`

export const ListItem = styled(MuiListItem)`
  width: 100%;
  padding: ${spacing(1)};
  mark {
    color: ${palette('primary.main')};
    background: ${fade('primary.main', 0.2)};
  }
`
