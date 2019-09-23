import { Toolbar } from '@material-ui/core'
import React from 'react'

import { AppBar } from './header.desktop.css'
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
