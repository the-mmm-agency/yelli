import Application from 'components/application'
import SEO from 'components/seo'
import React from 'react'

import { Grid, Name } from './appGrid.template.css'
import { AppPageProps } from 'types'

const AppGrid: React.FC<AppPageProps> = ({
  name,
  apps,
}) => (
  <>
    <SEO title={name} />
    <Name component="h1" variant="h5">
      {name}
    </Name>
    <Grid
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

export default AppGrid
