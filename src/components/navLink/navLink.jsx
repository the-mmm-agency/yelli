import React from 'react'

import ListItem from './navLink.css'

import Link from 'components/link'

const NavLink = ({ children, ...props }) => (
  <li>
    <ListItem activeClassName="active" button component={Link} dense {...props}>
      {children}
    </ListItem>
  </li>
)

export default NavLink
