import styled from '@emotion/styled'
import { ListItem as MuiListItem } from '@material-ui/core'
import {
  fade,
  palette,
  shape,
  spacing,
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

  width: calc(100% - ${spacing(4)});
  margin-top: ${spacing(1)};
  margin-left: ${spacing(2)};
  padding: ${spacing(0.8)};
  font-weight: 500;
  ${transitions(['background-color', 'color'], {
    duration: 'standard',
    easing: 'sharp',
  })}
  ${shape}
`

export default ListItem
