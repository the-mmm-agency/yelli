import { List } from '@material-ui/core'
import React from 'react'

import Application from 'src/components/application'
import ListHeader from 'src/components/listHeader'
import SEO from 'src/components/seo'
import { AppPageProps } from 'src/types'

const AppList: React.FC<AppPageProps> = ({
  name,
  apps,
}) => (
  <>
    <SEO title={name} />
    <ListHeader>{name}</ListHeader>
    <List>
      {apps.map(app => (
        <Application key={app.id} variant="list" {...app} />
      ))}
    </List>
  </>
)

export default AppList
