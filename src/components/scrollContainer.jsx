import React, { useContext } from 'react'
import Scrollbars, { ScrollbarContext } from 'react-scrollbars-custom'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'

import useScroll from 'components/scrollProvider'

const useStyles = makeStyles(theme => ({
  scroll: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100vh - 65px - 68px) !important',
      paddingBottom: 64,
      '@media all and (display-mode: standalone)': {
        paddingBottom: 0,
      },
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 240,
      width: 'calc(100% - 240px) !important',
    },
    height: 'calc(100vh - 65px) !important',
    scrollPaddingTop: '100px',
    scrollSnapType: 'y mandatory',
    scrollSnapPointsY: 'repeat(100%)',
  },
}))

const ScrollContainer = ({ children, pathname }) => {
  const classes = useStyles()
  const { scroll } = useScroll()
  const scrollTop = pathname.includes('/app/') ? 0 : scroll
  return (
    <Scrollbars
      createContext
      id="scroll"
      mobileNative
      noScrollX
      className={classes.scroll}
      scrollTop={scrollTop}
    >
      {children}
    </Scrollbars>
  )
}

export const useScrollContainer = () =>
  useContext(ScrollbarContext).parentScrollbar

ScrollContainer.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default ScrollContainer
