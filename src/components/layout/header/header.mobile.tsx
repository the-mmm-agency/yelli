import { ArrowBack as BackIcon } from '@material-ui/icons'
import React from 'react'
import Headroom from 'react-headroom'

import {
  AppBar,
  BackButton,
  Toolbar,
} from './header.mobile.css'
import SettingsMenu from './settingsMenu'

import Logo from 'src/components/logo'
import { PathnameProps } from 'src/types'

const MobileHeader: React.FC<PathnameProps> = ({
  pathname,
}) => (
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
        <Logo />
        <SettingsMenu />
      </Toolbar>
    </AppBar>
  </Headroom>
)

export default MobileHeader
