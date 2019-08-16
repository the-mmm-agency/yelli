import {
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
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
        <DrawerLink to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </DrawerLink>
        <DrawerLink to="/search/">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText>Search</ListItemText>
        </DrawerLink>
      </List>
      <Categories />
    </DrawerContainer>
  </Nav>
)

export default Drawer
