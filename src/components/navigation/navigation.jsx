import {
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
import React from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'

import AppBar from './navigation.css'

const Navigation = ({ pathname }) => {
  const handleChange = (event, newValue) => {
    event.preventDefault()
    navigate(newValue, { replace: true })
  }

  const getIcon = (path, Match, NoMatch) =>
    path === pathname ? <Match /> : <NoMatch />

  return (
    <AppBar>
      <BottomNavigation
        onChange={handleChange}
        value={pathname}
      >
        <BottomNavigationAction
          icon={getIcon('/', Home, HomeOutlined)}
          label="Home"
          value="/"
        />
        <BottomNavigationAction
          icon={getIcon('/top-apps', Poll, PollOutlined)}
          label="Top apps"
          value="/top-apps"
        />
        <BottomNavigationAction
          icon={getIcon(
            '/categories',
            Category,
            CategoryOutlined
          )}
          label="Categories"
          value="/categories"
        />
        <BottomNavigationAction
          icon={<Search />}
          label="Search"
          value="/search"
        />
      </BottomNavigation>
    </AppBar>
  )
}

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Navigation