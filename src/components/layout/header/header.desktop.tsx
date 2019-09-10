import React from 'react'

import { AppBar, Toolbar } from './header.desktop.css'
import ThemeToggle from './header.themeToggle'
import UserMenu from './userMenu'

import Search from 'src/components/search'

const DesktopHeader: React.FC = () => (
  <AppBar>
    <Toolbar>
      <Search />
      <ThemeToggle />
      <UserMenu />
    </Toolbar>
  </AppBar>
)

export default DesktopHeader
