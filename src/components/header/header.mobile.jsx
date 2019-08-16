import { ButtonBase } from '@material-ui/core'
import { ArrowBack as BackIcon } from '@material-ui/icons'
import React from 'react'
import PropTypes from 'prop-types'

import {
  AppBar,
  BackButton,
  Headroom,
  Toolbar,
} from './header.mobile.css'

import Link from 'components/link'
import SettingsMenu from 'components/settingsMenu'
import Logo from 'components/logo'

const MobileHeader = ({ pathname }) => (
  <Headroom>
    <AppBar position="relative">
      <Toolbar>
        <BackButton
          aria-label="Go home"
          color="primary"
          hidden={pathname === '/'}
          onClick={() => {
            window.history.back()
          }}
        >
          <BackIcon />
        </BackButton>
        <ButtonBase
          component={Link}
          to="/"
          aria-label="Go back"
        >
          <Logo />
        </ButtonBase>
        <SettingsMenu />
      </Toolbar>
    </AppBar>
  </Headroom>
)

MobileHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default MobileHeader
