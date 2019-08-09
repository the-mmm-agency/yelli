import {
  AppBar as MuiAppBar,
  ButtonBase,
  IconButton,
  Hidden,
  Toolbar,
} from '@material-ui/core'
import { ArrowBack as BackIcon } from '@material-ui/icons'
import React from 'react'
import { theme, ifProp } from 'styled-tools'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Link from 'components/link'
import UserMenu from 'components/userMenu'
import Logo from 'components/logo'
import { drawerWidth } from 'components/sideDrawer'
import { up, down } from 'util/theme'

const AppBar = styled(MuiAppBar)`
  ${down('sm')} {
    margin-left: 0;
    width: 100%;
  }
  border-bottom: 1px solid ${theme('palette.divider')};
  box-shadow: none;
  margin-left: ${drawerWidth}px;
  max-height: fit-content;
  width: calc(100% - ${drawerWidth}px);
`

const BackButton = styled(IconButton)`
  opacity: ${ifProp('hidden', 0, 1)};
`

const LogoButton = styled(ButtonBase)`
  ${down('sm')} {
    margin: auto;
    flex-grow: 1;
  }
  ${up('md')} {
    border-right: 1px solid ${theme('palette.divider')};
    width: 216px;
  }
  .gatsby-image-wrapper {
    margin: auto;
  }
`

const Header = ({ pathname }) => (
  <AppBar>
    <Toolbar>
      <Hidden mdUp>
        <BackButton
          color="primary"
          hidden={pathname === '/'}
          onClick={() => {
            window.history.back()
          }}
        >
          <BackIcon />
        </BackButton>
        <LogoButton component={Link} to="/">
          <Logo />
        </LogoButton>
      </Hidden>
      <UserMenu />
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Header
