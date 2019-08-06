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
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import { navigate } from 'gatsby'

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

const Navigation = () => {
  const classes = useStyles()
  const [value, setValue] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )
  const onChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
    setTimeout(() => {
      navigate(newValue, { replace: true, state: { previousPage: '/' } })
    }, 200)
  }
  return (
    <AppBar className={classes.root}>
      <BottomNavigation
        className={classes.bottomNavigation}
        onChange={onChange}
        value={value}
      >
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={
            value === '/' ? (
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
            value === '/top-apps' ? (
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
            value === '/categories' ? (
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

export default Navigation
