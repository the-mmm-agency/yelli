import React from 'react'

import { Grid, Name } from './appGrid.template.css'

import Application from 'src/components/application'
import SEO from 'src/components/seo'
import { AppPageProps } from 'src/types'

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
      as="ul"
      flexWrap="wrap"
      justifyContent="space-between"
      px={2}
    >
      {apps &&
        apps.map(app => (
          <Application key={app.id} {...app} />
        ))}
    </Grid>
  </>
)

export default AppGrid
