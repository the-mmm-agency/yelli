import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-scroll-snap-points-x': 'repeat(100%)',
    '-webkit-scroll-snap-type': 'manditory',
    listStyle: 'none',
    minHeight: 'fit-content',
    overflowX: 'scroll',
    overflowY: 'hidden',
    'padding-inline-start': `${theme.spacing(2)}px`,
    'scroll-snap-type': 'x mandatory',
    whiteSpace: 'nowrap',
  },
}))

const SwipableAppList = ({ AppComponent, apps }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} component="ul" container item wrap="nowrap">
      {apps.map(app => (
        <AppComponent key={app.id} {...app} />
      ))}
    </Grid>
  )
}

SwipableAppList.propTypes = {
  AppComponent: PropTypes.element.isRequired,
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.shape({
        name: PropTypes.string,
      }),
      icon: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  length: PropTypes.number,
  loading: PropTypes.bool,
}

export default SwipableAppList
