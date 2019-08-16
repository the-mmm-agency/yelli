import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

const PageTransition = ({ children, pathname }) => {
  const duration = 0.2

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
      transition: {
        duration: duration,
      },
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
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
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
