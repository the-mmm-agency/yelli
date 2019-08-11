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
import { css } from '@emotion/core'

import { up } from 'util/theme'
import CategoryList from 'components/categoryList'
import NavLink from 'components/navLink'
import Logo from 'components/logo'

export const drawerWidth = 240

const LogoContainer = styled.div`
  min-height: 56px;
  border-bottom: 1px solid ${theme('palette.divider')};
  display: flex;
  line-height: 0;
  width: ${drawerWidth};
  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  ${up('sm')} {
    min-height: 64px;
  }
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
        <Logo
          css={css`
            height: 100%;
            margin: auto;
          `}
        />
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
)

export default SideDrawer
