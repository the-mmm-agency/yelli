import {
  Drawer as MuiDrawer,
  List,
} from '@material-ui/core'
import {
  HomeOutlined as Home,
  PollOutlined as Poll,
} from '@material-ui/icons'
import React from 'react'

import Categories from './drawer.categories'
import { LogoContainer, Nav } from './drawer.css'
import DrawerLink from './drawer.link'

import Logo from 'src/components/logo'

const Drawer: React.FC = () => (
  <Nav aria-label="Site navigation">
    <MuiDrawer variant="permanent">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <List dense>
        <DrawerLink icon={<Home />} text="Home" to="/" />
        <DrawerLink
          icon={<Poll />}
          text="Top Apps"
          to="/top-apps"
        />
      </List>
      <Categories />
    </MuiDrawer>
  </Nav>
)

export default Drawer
