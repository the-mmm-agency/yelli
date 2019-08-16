import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import Link from 'components/link'
import PropTypes from 'prop-types'
import React from 'react'

import LinkButton from './drawer.link.css'

const DrawerLink = ({ children, Icon, text, ...props }) => (
  <li>
    <LinkButton
      button
      dense
      activeClassName="active"
      component={Link}
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
