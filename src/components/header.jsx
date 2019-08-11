import {
  AppBar as MuiAppBar,
  ButtonBase,
  IconButton,
  Toolbar as MuiToolbar,
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
  margin-left: ${drawerWidth}px;
  width: calc(100% - ${drawerWidth}px);
`

const LogoButton = styled(ButtonBase)`
  ${up('md')} {
    opacity: 0;
  }
`
const BackButton = styled(IconButton)`
  ${up('md')} {
    opacity: 0;
  }
  opacity: ${ifProp('hidden', 0, 1)};
`

const Toolbar = styled(MuiToolbar)`
  justify-content: space-between;
`

const Header = ({ pathname }) => (
  <AppBar>
    <Toolbar>
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
      <UserMenu />
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Header
