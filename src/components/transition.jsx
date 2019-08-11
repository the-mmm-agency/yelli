import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

const Transition = ({ children, pathname }) => {
  const duration = 0.2

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
  }

  return (
    <AnimatePresence>
      <motion.main
        key={pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
        id="main"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}

Transition.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Transition
