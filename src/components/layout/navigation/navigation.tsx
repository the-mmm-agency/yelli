import { BottomNavigation } from '@material-ui/core'
import {
  AccountCircle,
  AccountCircleOutlined,
  Category,
  CategoryOutlined,
  Home,
  HomeOutlined,
  Poll,
  PollOutlined,
} from '@material-ui/icons'
import { navigate } from 'gatsby'
import React from 'react'

import AppBar from './navigation.css'
import NavigationItem from './navigation.item'

import HideOnScroll from 'src/components/hideOnScroll'
import { PathnameProps } from 'src/types'

const Navigation: React.FC<PathnameProps> = ({
  pathname,
}) => {
  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: string
  ): void => {
    event.preventDefault()
    navigate(newValue, { replace: true })
  }
  return (
    <HideOnScroll direction="up">
      <AppBar>
        <BottomNavigation
          onChange={handleChange}
          value={pathname}
        >
          <NavigationItem
            Filled={Home}
            Outlined={HomeOutlined}
            label="Home"
            path="/"
          />
          <NavigationItem
            Filled={Poll}
            Outlined={PollOutlined}
            label="Top Apps"
            path="/top-apps"
          />
          <NavigationItem
            Filled={Category}
            Outlined={CategoryOutlined}
            label="Categories"
            path="/categories"
          />
          <NavigationItem
            Filled={AccountCircle}
            Outlined={AccountCircleOutlined}
            label="Profile"
            path="/profile"
          />
        </BottomNavigation>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navigation
