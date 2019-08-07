import React from 'react'
import Scrollbars from 'react-scrollbars-custom'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

import useScroll from 'components/scrollProvider'

const useStyles = makeStyles(theme => ({
  scroll: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 65px - 68px) !important',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 240,
    },
    height: 'calc(100vh - 65px) !important',
    marginTop: 65,
    width: '100%',
    scrollPaddingTop: '100px',
    scrollSnapType: 'y mandatory',
    scrollSnapPointsY: 'repeat(100%)',
    WebkitOverflowScrolling: 'touch',
  },
}))

const ScrollContainer = ({ children, pathname }) => {
  const classes = useStyles()
  const { scroll } = useScroll()
  return (
    <Scrollbars
      createContext={true}
      id="scroll"
      mobileNative
      noScrollX
      className={classes.scroll}
      scrollTop={pathname.includes('/app/') ? 0 : scroll}
    >
      {children}
    </Scrollbars>
  )
}

ScrollContainer.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default ScrollContainer
