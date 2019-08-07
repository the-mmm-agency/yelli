import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  header: {
    borderBottom: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1,
    },
    backgroundColor: theme.palette.background.paper,
    padding: {
      left: theme.spacing(2),
      right: theme.spacing(4),
      bottom: theme.spacing(2),
      top: theme.spacing(4),
    },
    scrollSnapAlign: 'start',
    fontWeight: 500,
  },
}))

const ListHeader = ({ children, ...props }) => {
  const classes = useStyles()
  return (
    <Typography
      className={classes.header}
      component="h1"
      variant="h5"
      {...props}
    >
      {children}
    </Typography>
  )
}

export default ListHeader
