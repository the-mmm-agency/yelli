import { AppBar, IconButton, Hidden, Toolbar } from '@material-ui/core'
import { ArrowBack as BackIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'

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
    backgroundColor: theme.palette.background.paper,
    marginLeft: drawerWidth,
    maxHeight: 'fit-content',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  hide: {
    opacity: 0,
    transition: theme.transitions.create('opacity', {
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

const Header = ({ pathname }) => {
  const classes = useStyles()
  const handleLogoClick = () => {
    navigate('/')
  }
  const handleBack = () => {
    window.history.back()
  }
  const iconClass = pathname === '/' ? classes.hide : ''
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Hidden mdUp>
          <>
            <IconButton
              className={iconClass}
              color="primary"
              onClick={handleBack}
            >
              <BackIcon />
            </IconButton>
            <div
              className={classes.logoContainer}
              onClick={handleLogoClick}
              onKeyDown={handleLogoClick}
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

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Header
