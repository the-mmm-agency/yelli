import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Scrollbars from 'react-scrollbars-custom'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    '&::after': {
      minWidth: 15,
      minHeight: 'fit-content',
      /* eslint-disable quotes */
      content: "''",
      /* eslint-enable quotes */
    },
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
    },
    minHeight: 'fit-content',
    'padding-inline-start': `${theme.spacing(2)}px`,
    width: 'calc(100vw - 240px)',
  },
  scroll: {
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      width: '100vw !important',
    },
    scrollPaddingInlineStart: `${theme.spacing(2)}px`,
    minHeight: 'fit-content !important',
    scrollSnapType: 'x proximity',
    scrollSnapPointsX: 'repeat(100%)',
    WebkitOverflowScrolling: 'touch',
    marginRight: 240,
    width: 'calc(100vw - 240px) !important',
  },
}))

const HorizontalScroll = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <Scrollbars
      noScrollY
      className={classes.scroll}
      translateContentSizesToHolder
      mobileNative
      {...props}
    >
      <Grid container className={classes.root} wrap="nowrap">
        {children}
      </Grid>
    </Scrollbars>
  )
}

export default HorizontalScroll
