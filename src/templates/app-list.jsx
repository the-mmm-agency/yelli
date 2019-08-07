import { List } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import PropTypes from 'prop-types'

import AppComponent from 'components/appComponent'
import ListHeader from 'components/listHeader'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh',
  },
}))

const AppList = ({ name, apps }) => {
  const classes = useStyles()
  return (
    <>
      <ListHeader>{name}</ListHeader>
      <List className={classes.root}>
        {apps.map(app => (
          <AppComponent key={app.id} {...app} type="list" page="/new" />
        ))}
      </List>
    </>
  )
}

AppList.propTypes = {
  apps: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default AppList
