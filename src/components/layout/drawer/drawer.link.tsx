import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import React from 'react'

import { Link, ListItem } from './drawer.link.css'

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
  <li>
    <Link activeClassName="active" to={to}>
      <ListItem button dense>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </Link>
  </li>
)

export default DrawerLink
