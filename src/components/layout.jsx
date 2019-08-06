import { Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Scrollbars from 'react-scrollbars-custom'
import React, { useEffect } from 'react'

import Header from 'components/header'
import Navigation from 'components/navigation'
import SideDrawer from 'components/sideDrawer'
import useScroll from 'components/scrollProvider'

const useStyles = makeStyles(theme => ({
  '@global': {
    '*, body': {
      scrollbarColor: '#161a2a01 transparent',
      scrollbarWidth: 'thin',
    },
    '::selection': {
      background: theme.palette.primary.main,
      color: '#fff',
    },
    '@global .ScrollbarsCustom-Thumb': {
      background: `${theme.palette.scrollbar} !important`,
      borderRadius: '0px !important',
    },
    '@global .ScrollbarsCustom-Track': {
      background: 'transparent !important',
      borderRadius: '0px !important',
      height: '5px !important',
    },
    body: {
      '-webkit-tap-highlight-color': 'transparent',
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      backgroundColor: theme.palette.background.default,
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        '-webkit-user-select': 'auto',
      },
      wordSpacing: theme.palette.type === 'dark' ? '.05em' : '0',
    },
    '*, *::before, *::after': {
      '@media: (prefers-reduced-motion: reduce)': {
        animation: 'none !important',
        transition: 'none !important',
      },
    },
  },
  content: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 128px)',
      width: '100vw',
    },
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    width: 'calc(100vw - 240px)',
  },
  root: {
    display: 'flex',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  scroll: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 128px) !important',
    },
    height: 'calc(100vh - 64px) !important',
  },
  toolbar: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const { scroll, setScroll } = useScroll()
  let scrollTop = scroll
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      setScroll(0)
    }
    if (
      typeof window !== 'undefined' &&
      window.location.pathname.includes('/app/')
    ) {
      scrollTop = 0
    }
  })
  return (
    <div className={classes.root}>
      <Header />
      <Hidden smDown>
        <SideDrawer />
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Scrollbars
          createContext={true}
          id="scroll"
          noScrollX
          className={classes.scroll}
          scrollTop={scrollTop}
        >
          {children}
        </Scrollbars>
        <Hidden mdUp>
          <div className={classes.toolbar} />
        </Hidden>
        <Hidden mdUp>
          <div className={classes.toolbar} />
        </Hidden>
      </main>
      <Hidden mdUp>
        <Navigation />
      </Hidden>
    </div>
  )
}

export default Layout
