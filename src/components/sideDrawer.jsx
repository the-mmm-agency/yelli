import {
  Drawer as MuiDrawer,
  List,
  ListItemIcon,
  ListItemText,
  Hidden,
} from '@material-ui/core'
import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
} from '@material-ui/icons'
import React from 'react'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import CategoryList from 'components/categoryList'
import NavLink from 'components/navLink'
import Logo from 'components/logo'

export const drawerWidth = 240

const LogoContainer = styled.div`
  border-bottom: 1px solid ${theme('palette.divider')};
  display: flex;
  height: 64px;
  width: ${drawerWidth};
`

const Drawer = styled(MuiDrawer)`
  flex-shrink: 0;
  width: ${drawerWidth}px;
  z-index: 1000;
  .MuiDrawer-paper {
    border-color: ${theme('palette.divider')};
    overflow: hidden;
    width: ${drawerWidth}px;
  }
`

const SideDrawer = () => (
  <Hidden smDown implementation="css">
    <Drawer variant="permanent">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <List dense>
        <li>
          <NavLink to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </NavLink>
        </li>
        <li>
          <NavLink to="/search/">
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>Search</ListItemText>
          </NavLink>
        </li>
      </List>
      <CategoryList />
    </Drawer>
  </Hidden>
)

export default SideDrawer
