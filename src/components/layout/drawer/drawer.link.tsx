import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import React from 'react'

import { ListItem } from './drawer.link.css'

import Link from 'src/elements/link'

type DrawerLinkProps = {
  icon: React.ReactElement
  text: string
  to: string
}

const DrawerLink: React.FC<DrawerLinkProps> = ({
  icon,
  text,
  to,
}) => (
  <ListItem
    button
    dense
    activeClassName="active"
    component={Link}
    to={to}
  >
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
)

export default DrawerLink
