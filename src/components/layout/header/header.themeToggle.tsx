import { IconButton, Tooltip } from '@material-ui/core'
import { AnimatePresence, motion } from 'framer-motion'
import {
  WeatherNight as DarkIcon,
  WeatherSunny as LightIcon,
} from 'mdi-material-ui'
import React from 'react'
import useDarkMode from 'use-dark-mode'

import { useBoolean } from 'src/hooks/useBoolean'

const ThemeToggle: React.FC = () => {
  const { toggle, value } = useDarkMode()
  const {
    toggle: toggleState,
    value: valueState,
  } = useBoolean(value)
  return (
    <Tooltip
      placement="bottom"
      title="Switch day/night theme"
    >
      <IconButton
        aria-label="Switch day/night theme"
        color="primary"
        onClick={toggleState}
      >
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={toggle}
        >
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            css={{ display: 'flex' }}
            exit={{ opacity: 0, y: 10 }}
            key={String(valueState)}
            transition={{ duration: 0.3 }}
          >
            {valueState ? <DarkIcon /> : <LightIcon />}
          </motion.div>
        </AnimatePresence>
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle
