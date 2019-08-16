import SettingsMenu from 'components/settingsMenu'
import React from 'react'

import { AppBar, Toolbar } from './header.desktop.css'

const DesktopHeader = () => (
  <AppBar>
    <Toolbar>
      <SettingsMenu />
    </Toolbar>
  </AppBar>
)

export default DesktopHeader
