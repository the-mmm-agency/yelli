import { Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Location } from '@reach/router'
import Scrollbars from 'react-scrollbars-custom'
import React from 'react'

import Header from 'components/header'
import Navigation from 'components/navigation'
import SideDrawer from 'components/sideDrawer'
import useScroll from 'components/scrollProvider'

const useStyles = makeStyles(theme => ({
  '@global': {
    '::selection': {
      background: theme.palette.primary.main,
      color: '#fff',
    },
    '::placeholder': {
      color: `${theme.palette.text.placeholder} !important`,
    },
    '@global .ScrollbarsCustom-Content': {
      display: 'flex',
      flexDirection: 'column',
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
  root: {
    display: 'flex',
    minHeight: '100vh',
    minWidth: '100vw',
  },
  scroll: {
    [theme.breakpoints.down('md')]: {
      height: 'calc(100vh - 65px - 68px)',
    },
    height: 'calc(100vh - 65px)',
    marginTop: 65,
    width: '100%',
    scrollPaddingTop: '100px',
    scrollSnapType: 'y mandatory',
    scrollSnapPointsY: 'repeat(100%)',
    WebkitOverflowScrolling: 'touch',
  },
  toolbar: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const { scroll } = useScroll()
  return (
    <div className={classes.root}>
      <Header />
      <Hidden smDown>
        <SideDrawer />
      </Hidden>
      <Location>
        {({ location: { pathname } }) => (
          <Scrollbars
            createContext={true}
            id="scroll"
            mobileNative
            noScrollX
            className={classes.scroll}
            scrollTop={pathname.includes('/app/') ? 0 : scroll}
          >
            {children}
          </Scrollbars>
        )}
      </Location>
      <Hidden mdUp>
        <Navigation />
      </Hidden>
    </div>
  )
}

export default Layout
