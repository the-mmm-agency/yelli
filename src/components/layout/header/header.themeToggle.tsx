import { IconButton, Tooltip } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import {
  WeatherNight as DarkIcon,
  WeatherSunny as LightIcon,
} from 'mdi-material-ui'
import React from 'react'
import useDarkMode from 'use-dark-mode'

const ThemeToggle: React.FC = () => {
  const darkMode = useDarkMode()
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
        <AnimatePresence exitBeforeEnter>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            css={{ display: 'flex' }}
            exit={{ opacity: 0, y: 10 }}
            key={`${darkMode.value}`}
            transition={{ duration: 0.6 }}
          >
            {darkMode.value ? <DarkIcon /> : <LightIcon />}
          </motion.div>
        </AnimatePresence>
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle
