import { Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import Head from 'components/head'
import ElasticScroll from 'components/elasticScroll'
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
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Head />
      <div className={classes.root}>
        <Header />
        <Hidden smDown>
          <SideDrawer />
        </Hidden>
        <ElasticScroll>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
            <Hidden mdUp>
              <div className={classes.toolbar} />
            </Hidden>
            <Hidden mdUp>
              <div className={classes.toolbar} />
            </Hidden>
          </main>
        </ElasticScroll>
        <Hidden mdUp>
          <Navigation />
        </Hidden>
      </div>
    </>
  )
}

export default Layout
