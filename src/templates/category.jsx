import { Hidden, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'components/seo'
import AppList from 'templates/app-list'
import AppComponent from 'components/appComponent'

const useStyles = makeStyles(theme => ({
  header: {
    borderBottom: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1,
    },
    padding: {
      bottom: theme.spacing(2),
      left: theme.spacing(4),
      right: theme.spacing(4),
      top: theme.spacing(2),
    },
    fontWeight: 500,
  },
  root: {
    '&::after': {
      content: '""',
      flex: '2 0 auto',
    },
    display: 'flex',
    flexWrap: 'wrap',
    padding: {
      bottom: theme.spacing(3),
      left: theme.spacing(4),
      right: theme.spacing(4),
      top: theme.spacing(3),
    },
  },
  listStyle: 'none',
}))

const Category = ({
  data: {
    graphcms: { applications },
  },
  pageContext: { name },
}) => {
  const classes = useStyles()
  return (
    <>
      <SEO title={`${name} Apps`} />
      <Hidden smUp implementation="css">
        <AppList name={name} apps={applications} />
      </Hidden>
      <Hidden smDown implementation="css">
        <Typography className={classes.header} component="h1" variant="h5">
          {name}
        </Typography>
        <Grid
          className={classes.root}
          component="ul"
          container
          justify="space-between"
          spacing={4}
        >
          {applications.map(app => (
            <AppComponent key={app.id} {...app} />
          ))}
        </Grid>
      </Hidden>
    </>
  )
}

export const pageQuery = graphql`
  query categoryName($id: ID!) {
    graphcms {
      applications(where: { category: { id: $id } }) {
        ...AppCard
      }
    }
  }
`

export default Category
