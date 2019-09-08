import React from 'react'

import { AppBar, Toolbar } from './header.desktop.css'
import SettingsMenu from './settingsMenu'

const DesktopHeader: React.FC = () => (
  <AppBar>
    <Toolbar>
      <SettingsMenu />
    </Toolbar>
  </AppBar>
)

export default DesktopHeader
