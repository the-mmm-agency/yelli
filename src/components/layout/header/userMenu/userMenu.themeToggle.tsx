import {
  ListItemSecondaryAction,
  Switch,
} from '@material-ui/core'
import {
  WeatherNight as DarkIcon,
  WeatherSunny as LightIcon,
} from 'mdi-material-ui'
import React from 'react'
import useDarkMode from 'use-dark-mode'

import UserMenuItem from './userMenu.item'

const ThemeToggle: React.FC = () => {
  const darkMode = useDarkMode()
  const Icon = darkMode.value ? DarkIcon : LightIcon
  return (
    <UserMenuItem
      icon={<Icon fill="currentColor" />}
      onClick={darkMode.toggle}
      text={`${darkMode.value ? 'Dark' : 'Light'} theme`}
    >
      <ListItemSecondaryAction>
        <Switch
          checked={darkMode.value}
          color="primary"
          onChange={darkMode.toggle}
        />
      </ListItemSecondaryAction>
    </UserMenuItem>
  )
}

export default ThemeToggle
