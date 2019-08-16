import React from 'react'
import PropTypes from 'prop-types'

import { Name, Grid } from './appGrid.css'

import Application from 'components/application'

const AppGrid = ({ name, apps }) => (
  <>
    <Name component="h1" variant="h5">
      {name}
    </Name>
    <Grid
      as="ul"
      px={2}
      flexWrap="wrap"
      justifyContent="space-between"
    >
      {apps.map(app => (
        <Application key={app.id} {...app} />
      ))}
    </Grid>
  </>
)

AppGrid.propTypes = {
  apps: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default AppGrid
