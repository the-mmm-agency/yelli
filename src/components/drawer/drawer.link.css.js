import { ListItem as MuiListItem } from '@material-ui/core'
import styled from '@emotion/styled'

import {
  palette,
  fade,
  spacing,
  shape,
  transitions,
} from 'util/theme'

const ListItem = styled(MuiListItem)`
  .MuiListItemIcon-root {
    color: inherit;
  }
  .MuiListItemText-primary {
    color: inherit;
    font-weight: inherit;
  }
  &.active,
  &:hover {
    color: ${palette('primary.main')};
    font-weight: 600;
  }
  &.active {
    background-color: ${fade('primary.main', 0.24)};
  }
  &:hover {
    background-color: ${fade('primary.main', 0.08)};
  }
  margin-left: ${spacing(2)};
  margin-top: ${spacing(1)};
  padding: ${spacing(0.8)};
  font-weight: 500;
  width: calc(100% - ${spacing(4)});
  ${transitions(['background-color', 'color'], {
    duration: 'standard',
    easing: 'sharp',
  })};
  ${shape}
`

export default ListItem
