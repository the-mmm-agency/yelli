import React from 'react'
import PropTypes from 'prop-types'
import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import LinkButton from './drawer.link.css'

import Link from 'components/link'

const DrawerLink = ({ children, Icon, text, ...props }) => (
  <li>
    <LinkButton
      activeClassName="active"
      button
      component={Link}
      dense
      {...props}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </LinkButton>
  </li>
)

DrawerLink.propTypes = {
  Icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
}

export default DrawerLink
