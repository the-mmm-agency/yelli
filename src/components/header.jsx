import { AppBar, IconButton, Hidden, Toolbar } from '@material-ui/core'
import { ArrowBack as BackIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { Location } from '@reach/router'
import React from 'react'
import { navigate } from 'gatsby'

import UserMenu from 'components/userMenu'
import Logo from 'components/logo'
import { drawerWidth } from 'components/sideDrawer'

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '100%',
    },
    borderBottom: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1,
    },
    boxShadow: 'none',
    marginLeft: drawerWidth,
    maxHeight: 'fit-content',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  hide: {
    opacity: 0,
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.sharp,
    }),
  },
  icon: {
    marginLeft: 'auto',
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4),
    },
    cursor: 'pointer',
    height: 64,
    margin: 'auto',
  },
  logoContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
      flexGrow: 1,
    },
    [theme.breakpoints.up('md')]: {
      borderRight: {
        color: theme.palette.divider,
        style: 'solid',
        width: 1,
      },
      width: 216,
    },
    display: 'flex',
  },
  name: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
    },
    alignItems: 'center',
    display: 'flex',
    height: 64,
    margin: 'auto',
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} color="paper">
      <Toolbar>
        <Hidden mdUp>
          <>
            <Location>
              {({ location: { pathname } }) => (
                <IconButton
                  className={pathname === '/' ? classes.hide : ''}
                  color="primary"
                  onClick={() => {
                    window.history.back()
                  }}
                >
                  <BackIcon />
                </IconButton>
              )}
            </Location>
            <div
              className={classes.logoContainer}
              onClick={() => navigate('/')}
              onKeyDown={() => navigate('/')}
              role="presentation"
            >
              <Logo className={classes.logo} />
            </div>
          </>
        </Hidden>
        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
