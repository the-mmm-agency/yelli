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
import { up } from 'util/theme'
import Logo from 'components/logo'

const LogoContainer = styled.div`
  ${up('sm')} {
    border-bottom: 1px solid ${theme('palette.divider')};
    display: flex;
    height: 64px;
    width: ${theme('sizes.sideDrawer')};
  }
`

const Nav = styled.nav`
  ${up('sm')} {
    flex-shrink: 0;
    width: ${theme('sizes.sideDrawer')};
    flex-shrink: 0;
    width: ${theme('sizes.sideDrawer')};
    z-index: 1000;
  }
`

const Drawer = styled(MuiDrawer)`
  ${up('sm')} {
    .MuiDrawer-paper {
      border-color: ${theme('palette.divider')};
      overflow: hidden;
      width: ${theme('sizes.sideDrawer')};
    }
  }
`

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
