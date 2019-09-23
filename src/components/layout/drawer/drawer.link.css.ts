import { ListItem as MuiListItem } from '@material-ui/core'

import styled from 'src/util/styled'
import {
  fade,
  palette,
  radii,
  spacing,
  transitions,
} from 'src/util/theme'

export const ListItem = styled(MuiListItem)`
  &:focus,
  &:hover {
    background-color: ${fade('primary.main', 0.08)};
  }
  &.active {
    background-color: ${fade('primary.main', 0.24)};
  }
  .MuiListItemIcon-root {
    color: inherit;
  }

  .MuiListItemText-primary {
    color: inherit;
    font-weight: inherit;
  }
  &.MuiListItem-root {
    color: ${palette('text.alt')};
    &.active,
    &:focus,
    &:hover {
      color: ${palette('primary.main')};
    }
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
  ${radii('default')}
` as typeof MuiListItem
