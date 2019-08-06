import { List, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { graphql } from 'gatsby'
import React from 'react'

import AppComponent from 'components/appComponent'
import SEO from 'components/seo'

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      padding: {
        bottom: theme.spacing(1),
        left: theme.spacing(4),
        right: theme.spacing(4),
        top: theme.spacing(3),
      },
    },
    padding: {
      bottom: theme.spacing(2),
      left: theme.spacing(4),
      right: theme.spacing(4),
      top: theme.spacing(2),
    },
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh',
  },
}))

const New = ({ data: { latest } }) => {
  const classes = useStyles()

  return (
    <>
      <SEO title="New Apps" />
      <Typography className={classes.header} component="h1" variant="h5">
        New Apps
      </Typography>
      <List className={classes.root}>
        {latest.applications.map(app => (
          <AppComponent key={app.id} {...app} type="list" />
        ))}
      </List>
    </>
  )
}

export const query = graphql`
  query newApps {
    latest: graphcms {
      applications(first: 30, orderBy: createdAt_ASC) {
        ...AppCard
      }
    }
  }
`

export default New
