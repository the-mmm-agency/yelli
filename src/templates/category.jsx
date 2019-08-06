import { Grid, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import React from 'react'
import { graphql } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import SEO from 'components/seo'
import AppComponent from 'components/appComponent'

const useStyles = makeStyles(theme => ({
  header: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
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
    '&:after': {
      content: '""',
      flex: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
      padding: {
        top: theme.spacing(3),
      },
      paddingInlineStart: `${theme.spacing(1)}px`,
    },
    [theme.breakpoints.up('sm')]: {
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
  },
}))

const Category = ({
  data: {
    graphcms: { applications },
  },
  pageContext: { name },
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      <SEO title={`${name} Apps`} />
      <Typography className={classes.header} component="h1" variant="h5">
        {name}
      </Typography>
      <Grid
        className={classes.root}
        component="ul"
        container
        justify="space-between"
        spacing={2}
      >
        {applications.map(app => (
          <AppComponent
            key={app.id}
            type={matches ? 'card' : 'list'}
            {...app}
          />
        ))}
      </Grid>
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
