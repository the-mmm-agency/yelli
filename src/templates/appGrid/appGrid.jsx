import Application from 'components/application'
import SEO from 'components/seo'
import PropTypes from 'prop-types'
import React from 'react'

import { Grid, Name } from './appGrid.css'

const AppGrid = ({ name, apps }) => (
  <>
    <SEO title={name} />
    <Name component="h1" variant="h5">
      {name}
    </Name>
    <Grid
      as="ul"
      flexWrap="wrap"
      justifyContent="space-between"
      px={2}
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
