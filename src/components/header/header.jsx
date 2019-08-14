import { ArrowBack as BackIcon } from '@material-ui/icons'
import React from 'react'
import PropTypes from 'prop-types'

import { AppBar, LogoButton, BackButton, Toolbar } from './header.css'

import Link from 'components/link'
import UserMenu from 'components/userMenu'
import Logo from 'components/logo'

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
