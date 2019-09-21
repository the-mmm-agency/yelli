import { IconButton, Tooltip } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import {
  WeatherNight as DarkIcon,
  WeatherSunny as LightIcon,
} from 'mdi-material-ui'
import React from 'react'
import useDarkMode from 'use-dark-mode'
import { useDebouncedCallback } from 'use-debounce/lib'

const Icon: React.FC<{ isDark: boolean }> = ({
  isDark,
}) => (
  <AnimatePresence exitBeforeEnter>
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      css={{ display: 'flex' }}
      exit={{ opacity: 0, y: 10 }}
      key={String(isDark)}
      transition={{ duration: 0.6 }}
    >
      {isDark ? <DarkIcon /> : <LightIcon />}
    </motion.div>
  </AnimatePresence>
)

const ThemeToggle: React.FC = () => {
  const { toggle, value } = useDarkMode()
  const [handleClick] = useDebouncedCallback(
    (): void => {
      toggle()
    },
    600,
    { leading: true }
  )
  return (
    <Tooltip
      placement="bottom"
      title="Switch day/night theme"
    >
      <IconButton
        aria-label="Switch day/night theme"
        color="primary"
        onClick={handleClick}
      >
        <Icon isDark={value} />
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle
