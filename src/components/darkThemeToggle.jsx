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

import { useDarkTheme } from 'components/themeProvider'

const DarkThemeToggle = () => {
  const themeState = useDarkTheme()
  const Icon = themeState.dark ? DarkThemeIcon : LightThemeIcon
  const handleClick = () => {
    themeState.toggle()
  }
  return (
    <MenuItem onClick={handleClick}>
      <ListItemIcon color="inherit">
        <Icon fill="currentColor" />
      </ListItemIcon>
      <ListItemText
        primary={`${themeState.dark ? 'Dark' : 'Light'} theme`}
        primaryTypographyProps={{ variant: 'subtitle1' }}
      />
      <ListItemSecondaryAction>
        <Switch
          color="primary"
          checked={themeState.dark}
          onChange={handleClick}
        />
      </ListItemSecondaryAction>
    </MenuItem>
  )
}

export default DarkThemeToggle
