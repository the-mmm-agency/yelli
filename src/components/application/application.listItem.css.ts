import { ListItem as MuiListItem } from '@material-ui/core'

import { spacing } from 'util/theme'

import AppIcon from 'components/appIcon'
import styled from 'util/styled'

export const Icon = styled(AppIcon)`
  width: 50px;
  height: 50px;
  margin-right: ${spacing(3)};
`

export const ListItem = styled(MuiListItem)`
  padding: ${spacing(2)};
`
