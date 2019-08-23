import {
  Drawer as MuiDrawer,
  List,
} from '@material-ui/core'
import {
  HomeOutlined as Home,
  SearchOutlined as Search,
} from '@material-ui/icons'
import Logo from 'components/logo'
import React from 'react'

import Categories from './drawer.categories'
import { LogoContainer, Nav } from './drawer.css'
import DrawerLink from './drawer.link'

const Drawer: React.FC = () => (
  <Nav aria-label="Site navigation">
    <MuiDrawer variant="permanent">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <List dense>
        <DrawerLink icon={<Home />} text="Home" to="/" />
        <DrawerLink
          icon={<Search />}
          text="Search"
          to="/search"
        />
      </List>
      <Categories />
    </MuiDrawer>
  </Nav>
)

export default Drawer
