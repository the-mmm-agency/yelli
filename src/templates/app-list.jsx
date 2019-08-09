import { List } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import AppComponent from 'components/appComponent'
import ListHeader from 'components/listHeader'

const AppList = ({ name, apps }) => (
  <>
    <ListHeader>{name}</ListHeader>
    <List>
      {apps.map(app => (
        <AppComponent key={app.id} {...app} type="list" page="/new" />
      ))}
    </List>
  </>
)

AppList.propTypes = {
  apps: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default AppList
