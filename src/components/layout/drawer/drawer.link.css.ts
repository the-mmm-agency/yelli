import { ListItem as MuiListItem } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

import styled from 'src/util/styled'
import {
  fade,
  palette,
  radii,
  spacing,
  transitions,
} from 'src/util/theme'

export const Link = styled(GatsbyLink)`
  &.active,
  &:focus,
  &:hover {
    color: ${palette('primary.main')};
    font-weight: 600;
    text-decoration: none;
  }
  color: inherit;
  text-decoration: none;
  &.active {
    background-color: ${fade('primary.main', 0.24)};
  }
  &:hover {
    background-color: ${fade('primary.main', 0.08)};
  }
`

export const ListItem = styled(MuiListItem)`
  &,
  &:hover {
    background-color: inherit;
  }

  .MuiListItemIcon-root {
    color: inherit;
  }

  .MuiListItemText-primary {
    color: inherit;
    font-weight: inherit;
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
