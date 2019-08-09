import { ListItem as MuiListItem } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'
import React from 'react'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import Link from 'components/link'
import { spacing, transitions } from 'util/theme'

const ListItem = styled(MuiListItem)`
  &:focus {
    background-color: inherit;
  }
  &:hover {
    background-color: ${props => fade(props.theme.palette.primary.main, 0.08)};
    color: ${theme('palette.primary.main')};
  }
  &.active {
    background-color: ${props => fade(props.theme.palette.primary.main, 0.24)};
    color: ${theme('palette.primary.main')};
    font-weight: 600;
  }
  .MuiListItemIcon-root {
    color: inherit;
  }
  .MuiListItemText-primary {
    color: inherit;
    font-weight: inherit;
  }
  border-radius: ${theme('shape.borderRadius')}px;
  margin-left: ${spacing(2)};
  margin-top: ${spacing(1)};
  font-weight: 500;
  padding: ${spacing(0.8)};
  transition: ${transitions(['background-color', 'color'], {
    duration: theme('transitions.duration.standard'),
    easing: theme('transitions.easing.sharp'),
  })};
  width: calc(100% - ${spacing(4)});
`

const NavLink = ({ children, ...props }) => (
  <ListItem activeClassName="active" button component={Link} dense {...props}>
    {children}
  </ListItem>
)

export default NavLink
