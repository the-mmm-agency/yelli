import { Slide, useScrollTrigger } from '@material-ui/core'
import { ArrowBack as BackIcon } from '@material-ui/icons'
import React from 'react'

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
}) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar>
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
    </Slide>
  )
}

export default MobileHeader
