import { List, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { graphql } from 'gatsby'

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

const TopApps = ({ data: { top } }) => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Top Apps" />
      <Typography className={classes.header} component="h1" variant="h5">
        Top Apps
      </Typography>
      <List className={classes.root}>
        {top.applications.map(app => (
          <AppComponent key={app.id} {...app} type="list" page="/top-apps" />
        ))}
      </List>
    </>
  )
}

export const query = graphql`
  query topList {
    top: graphcms {
      applications(first: 30, orderBy: rank_DESC) {
        ...AppCard
      }
    }
  }
`

export default TopApps
