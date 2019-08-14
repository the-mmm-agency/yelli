import React from 'react'
import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from '@material-ui/core'
import { ReactComponent as DarkThemeIcon } from '@mdi/svg/svg/weather-night.svg'
import { ReactComponent as LightThemeIcon } from '@mdi/svg/svg/weather-sunny.svg'
import useDarkMode from 'use-dark-mode'

const DarkThemeToggle = () => {
  const darkMode = useDarkMode()
  const Icon = darkMode.value ? DarkThemeIcon : LightThemeIcon
  return (
    <MenuItem onClick={darkMode.toggle}>
      <ListItemIcon color="inherit">
        <Icon fill="currentColor" />
      </ListItemIcon>
      <ListItemText
        primary={`${darkMode.value ? 'Dark' : 'Light'} theme`}
        primaryTypographyProps={{ variant: 'subtitle1' }}
      />
      <ListItemSecondaryAction>
        <Switch
          color="primary"
          checked={darkMode.value}
          onChange={darkMode.toggle}
        />
      </ListItemSecondaryAction>
    </MenuItem>
  )
}

export default DarkThemeToggle
