import { ListItem as MuiListItem } from '@material-ui/core'
import Img from 'gatsby-image'

import styled from 'src/util/styled'
import { radii, spacing } from 'src/util/theme'

export const Icon = styled(Img)`
  width: 50px;
  height: 50px;
  margin-right: ${spacing(3)};
  img {
    ${radii('heavy')};
  }
`

export const ListItem = styled(MuiListItem)`
  padding: ${spacing(2)};
` as typeof MuiListItem
