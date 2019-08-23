import {
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Switch,
} from '@material-ui/core'
import {
  WeatherNight as DarkIcon,
  WeatherSunny as LightIcon,
} from 'mdi-material-ui'
import React from 'react'
import useDarkMode from 'use-dark-mode'

const ThemeToggle = () => {
  const darkMode = useDarkMode()
  const Icon = darkMode.value ? DarkIcon : LightIcon
  return (
    <MenuItem onClick={darkMode.toggle}>
      <ListItemIcon color="inherit">
        <Icon fill="currentColor" />
      </ListItemIcon>
      <ListItemText
        primary={`${
          darkMode.value ? 'Dark' : 'Light'
        } theme`}
        primaryTypographyProps={{ variant: 'subtitle1' }}
      />
      <ListItemSecondaryAction>
        <Switch
          checked={darkMode.value}
          color="primary"
          onChange={darkMode.toggle}
        />
      </ListItemSecondaryAction>
    </MenuItem>
  )
}

export default ThemeToggle
