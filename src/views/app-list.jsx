import { List } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import Application from 'components/application'
import ListHeader from 'components/listHeader'

const AppList = ({ name, apps }) => (
  <>
    <ListHeader>{name}</ListHeader>
    <List>
      {apps.map(app => (
        <Application key={app.id} variant="list" {...app} />
      ))}
    </List>
  </>
)

AppList.propTypes = {
  apps: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default AppList
