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
    minHeight: 'fit-content',
    'padding-inline-start': `${theme.spacing(2)}px`,
  },
  scroll: {
    scrollPaddingInlineStart: `${theme.spacing(2)}px`,
    minHeight: 'fit-content !important',
    scrollSnapType: 'x proximity',
    scrollSnapPointsX: 'repeat(100%)',
    WebkitOverflowScrolling: 'touch',
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
