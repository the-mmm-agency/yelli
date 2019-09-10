import { ArrowBack as BackIcon } from '@material-ui/icons'
import React from 'react'
import Headroom from 'react-headroom'

import {
  AppBar,
  BackButton,
  Toolbar,
} from './header.mobile.css'
import ThemeToggle from './header.themeToggle'

import Search from 'src/components/search'
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
        <Search />
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  </Headroom>
)

export default MobileHeader
