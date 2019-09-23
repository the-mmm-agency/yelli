import {
  BottomNavigation,
  BottomNavigationAction,
  Slide,
  useScrollTrigger,
} from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
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

  const getIcon = (
    path: string,
    Match: React.ComponentType<SvgIconProps>,
    NoMatch: React.ComponentType<SvgIconProps>
  ): React.ReactElement =>
    path === pathname ? <Match /> : <NoMatch />

  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="up" in={!trigger}>
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
            icon={getIcon(
              './accountCircle',
              AccountCircle,
              AccountCircleOutlined
            )}
            label="Profile"
            value="/profile"
          />
        </BottomNavigation>
      </AppBar>
    </Slide>
  )
}

export default Navigation
