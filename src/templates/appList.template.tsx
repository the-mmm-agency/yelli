import { List } from '@material-ui/core'
import Application from 'components/application'
import ListHeader from 'components/listHeader'
import SEO from 'components/seo'
import React from 'react'

import { AppPageProps } from 'types'

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
