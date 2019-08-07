import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core'
import {
  Home,
  Search,
  Category,
  Poll,
  HomeOutlined,
  CategoryOutlined,
  PollOutlined,
} from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'

import useScroll from 'components/scrollProvider'

const useStyles = makeStyles(theme => ({
  bottomNavigation: {
    height: 68,
  },
  icon: {
    fontSize: '1.7rem',
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  root: {
    backgroundColor: theme.palette.background.default,
    borderTop: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1,
    },
    bottom: 0,
    boxShadow: 'none',
    fontSize: '1.8rem',
    top: 'auto',
  },
  selected: {
    fontSize: '0.75rem !important',
    fontWeight: '600 !important',
  },
}))

const Navigation = ({ pathname }) => {
  const classes = useStyles()
  const { setScroll } = useScroll()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const onChange = (event, newValue) => {
    event.preventDefault()
    navigate(newValue, { replace: true })
    setScroll(0)
  }
  if (matches) {
    return (
      <AppBar className={classes.root}>
        <BottomNavigation
          className={classes.bottomNavigation}
          onChange={onChange}
          value={pathname}
        >
          <BottomNavigationAction
            classes={{ label: classes.label, selected: classes.selected }}
            icon={
              pathname === '/' ? (
                <Home className={classes.icon} />
              ) : (
                <HomeOutlined className={classes.icon} />
              )
            }
            label="Home"
            value="/"
          />
          <BottomNavigationAction
            classes={{ label: classes.label, selected: classes.selected }}
            icon={
              pathname === '/top-apps' ? (
                <Poll className={classes.icon} />
              ) : (
                <PollOutlined className={classes.icon} />
              )
            }
            label="Top apps"
            value="/top-apps"
          />
          <BottomNavigationAction
            classes={{ label: classes.label, selected: classes.selected }}
            icon={
              pathname === '/categories' ? (
                <Category className={classes.icon} />
              ) : (
                <CategoryOutlined className={classes.icon} />
              )
            }
            label="Categories"
            value="/categories"
          />
          <BottomNavigationAction
            classes={{ label: classes.label, selected: classes.selected }}
            icon={<Search className={classes.icon} />}
            label="Search"
            value="/search"
          />
        </BottomNavigation>
      </AppBar>
    )
  }
  return null
}

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Navigation
