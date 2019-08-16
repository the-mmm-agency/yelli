import { List } from '@material-ui/core'
import {
  HomeOutlined as Home,
  SearchOutlined as Search,
} from '@material-ui/icons'
import React from 'react'

import {
  DrawerContainer,
  Nav,
  LogoContainer,
} from './drawer.css'
import Categories from './drawer.categories'
import DrawerLink from './drawer.link'

import Logo from 'components/logo'

const Drawer = () => (
  <Nav aria-label="Site navigation">
    <DrawerContainer variant="permanent">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <List dense>
        <DrawerLink to="/" Icon={Home} text="Home" />
        <DrawerLink
          to="/search"
          Icon={Search}
          text="Search"
        />
      </List>
      <Categories />
    </DrawerContainer>
  </Nav>
)

export default Drawer
