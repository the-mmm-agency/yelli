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
import { up } from 'util/theme'

const AppBar = styled(MuiAppBar)`
  ${up('md')} {
    margin-left: ${theme('sizes.sideDrawer')};
    width: calc(100% - ${theme('sizes.sideDrawer')});
  }
  border-bottom: 1px solid ${theme('palette.divider')};
  margin-left: 0;
  width: 100%;
`

const LogoButton = styled(ButtonBase)`
  ${up('md')} {
    opacity: 0;
    pointer-events: none;
  }
`
const BackButton = styled(IconButton)`
  ${up('md')} {
    opacity: 0;
    pointer-events: none;
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
