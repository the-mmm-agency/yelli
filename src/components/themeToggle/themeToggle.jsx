import {
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Switch,
} from '@material-ui/core'
import { ReactComponent as DarkIcon } from '@mdi/svg/svg/weather-night.svg'
import { ReactComponent as LightIcon } from '@mdi/svg/svg/weather-sunny.svg'
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
