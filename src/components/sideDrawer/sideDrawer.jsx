import { List, ListItemIcon, ListItemText, Hidden } from '@material-ui/core'
import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
} from '@material-ui/icons'
import React from 'react'

import { Drawer, Nav, LogoContainer } from './sideDrawer.css'

import CategoryList from 'components/categoryList'
import NavLink from 'components/navLink'
import Logo from 'components/logo'

const SideDrawer = () => (
  <Nav aria-label="Site navigation">
    <Hidden implementation="css" smDown>
      <Drawer variant="permanent">
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <List dense>
          <NavLink to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </NavLink>
          <NavLink to="/search/">
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>Search</ListItemText>
          </NavLink>
        </List>
        <CategoryList />
      </Drawer>
    </Hidden>
  </Nav>
)

export default SideDrawer
