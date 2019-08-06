import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    '&::after': {
      minWidth: 15,
      minHeight: '100%',
      /* eslint-disable quotes */
      content: "''",
      /* eslint-enable quotes */
    },
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-scroll-snap-points-x': 'repeat(100%)',
    '-webkit-scroll-snap-type': 'mandatory',
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
  AppComponent: PropTypes.func.isRequired,
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      icon: PropTypes.shape({
        handle: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
}

export default SwipableAppList
