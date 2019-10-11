import {
  AnimatePresence,
  Variant,
  motion,
} from 'framer-motion'
import React from 'react'

import { PathnameProps } from 'src/types'

const duration = 0.2

export const scrollDuration = duration * 1000

const enter: Variant = {
  opacity: 1,
  transition: {
    delay: duration,
    duration,
    when: 'beforeChildren',
  },
  y: 0,
}

const exit: Variant = {
  opacity: 0,
  transition: {
    duration,
  },
}

const initial: Variant = {
  ...exit,
  y: 20,
}

const PageTransition: React.FC<
  React.PropsWithChildren<PathnameProps>
> = ({ children, pathname }) => (
  <AnimatePresence exitBeforeEnter>
    <motion.div
      animate="enter"
      exit="exit"
      initial="initial"
      key={pathname}
      variants={{ enter, exit, initial }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

export default PageTransition
