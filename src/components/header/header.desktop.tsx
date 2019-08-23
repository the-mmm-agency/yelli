import { AppBar } from './header.desktop.css'
import { Toolbar } from './header.desktop.css'

import React from 'react'
import SettingsMenu from 'components/settingsMenu'

const DesktopHeader: React.FC = () => (
  <AppBar>
    <Toolbar>
      <SettingsMenu />
    </Toolbar>
  </AppBar>
)

export default DesktopHeader
