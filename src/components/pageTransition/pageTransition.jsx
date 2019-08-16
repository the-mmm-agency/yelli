import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'

const PageTransition = ({ children, pathname }) => {
  const duration = 0.2

  const variants = {
    enter: {
      opacity: 1,
      transition: {
        delay: duration,
        duration: duration,
        when: 'beforeChildren',
      },
      y: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
    },
    initial: {
      opacity: 0,
      transition: {
        duration: duration,
      },
      y: 20,
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        animate="enter"
        exit="exit"
        initial="initial"
        key={pathname}
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

PageTransition.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default PageTransition
