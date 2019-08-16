import React from 'react'

import LinkButton from './drawer.link.css'

import Link from 'components/link'

const DrawerLink = ({ children, ...props }) => (
  <li>
    <LinkButton
      activeClassName="active"
      button
      component={Link}
      dense
      {...props}
    >
      {children}
    </LinkButton>
  </li>
)

export default DrawerLink
