import { Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Scrollbars from 'react-scrollbars-custom'
import React from 'react'

import Header from 'components/header'
import Navigation from 'components/navigation'
import SideDrawer from 'components/sideDrawer'

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
  },
  toolbar: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <Hidden smDown>
        <SideDrawer />
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Scrollbars noScrollX>{children}</Scrollbars>
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
