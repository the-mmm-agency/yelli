import { ButtonBase } from '@material-ui/core'
import { ArrowBack as BackIcon } from '@material-ui/icons'
import Link from 'components/link'
import Logo from 'components/logo'
import SettingsMenu from 'components/settingsMenu'
import PropTypes from 'prop-types'
import React from 'react'
import Headroom from 'react-headroom'

import {
  AppBar,
  BackButton,
  Toolbar,
} from './header.mobile.css'

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
          aria-label="Go back"
          component={Link}
          to="/"
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
