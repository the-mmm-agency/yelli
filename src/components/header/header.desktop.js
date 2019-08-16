import React from 'react'

import { AppBar, Toolbar } from './header.desktop.css'

import SettingsMenu from 'components/settingsMenu'

const DesktopHeader = () => (
  <AppBar>
    <Toolbar>
      <SettingsMenu />
    </Toolbar>
  </AppBar>
)

export default DesktopHeader
