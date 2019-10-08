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
import React from 'react'

import AppBar from './navigation.css'
import NavigationItem from './navigation.item'

import HideOnScroll from 'src/components/hideOnScroll'
import { PathnameProps } from 'src/types'

const Navigation: React.FC<PathnameProps> = ({
  pathname,
}) => (
  <HideOnScroll direction="up">
    <AppBar>
      <BottomNavigation value={pathname}>
        <NavigationItem
          icon={{
            default: Home,
            selected: HomeOutlined,
          }}
          label="Home"
          value="/"
        />
        <NavigationItem
          icon={{
            default: Poll,
            selected: PollOutlined,
          }}
          label="Top Apps"
          value="/top-apps"
        />
        <NavigationItem
          icon={{
            default: Category,
            selected: CategoryOutlined,
          }}
          label="Categories"
          value="/categories"
        />
        <NavigationItem
          icon={{
            default: AccountCircle,
            selected: AccountCircleOutlined,
          }}
          label="Profile"
          value="/profile"
        />
      </BottomNavigation>
    </AppBar>
  </HideOnScroll>
)

export default Navigation
