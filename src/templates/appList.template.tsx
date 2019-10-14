import {
  List,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

import Application from 'src/components/application'
import { ListItem } from 'src/components/application/application.listItem.css'
import ListHeader from 'src/components/listHeader'
import SEO from 'src/components/seo'
import { AppPageProps } from 'src/types'

const AppList: React.FC<AppPageProps> = ({
  name,
  numberOfSkeletons = 20,
  variant = 'list',
  apps,
}) => (
  <>
    <SEO title={name} />
    <ListHeader>{name}</ListHeader>
    <List>
      {!apps
        ? [...new Array(numberOfSkeletons)].map(x => (
            <ListItem divider key={x}>
              <ListItemIcon>
                <Skeleton
                  height={50}
                  variant="rect"
                  width={50}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Skeleton height={10} width="20%" />
                }
                secondary={
                  <Skeleton height={8} width="10%" />
                }
              />
            </ListItem>
          ))
        : apps.map(app => (
            <Application
              key={app.id}
              variant={variant}
              {...app}
            />
          ))}
    </List>
  </>
)

export default AppList
