import { IconButton, Tooltip } from '@material-ui/core'
import {
  WeatherNight as DarkIcon,
  WeatherSunny as LightIcon,
} from 'mdi-material-ui'
import React from 'react'
import useDarkMode from 'use-dark-mode'

const ThemeToggle: React.FC = () => {
  const darkMode = useDarkMode()
  const Icon = darkMode.value ? DarkIcon : LightIcon
  return (
    <Tooltip
      placement="bottom"
      title="Switch day/night theme"
    >
      <IconButton
        aria-label="Switch day/night theme"
        color="primary"
        onClick={darkMode.toggle}
      >
        <Icon fill="currentColor" />
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle
