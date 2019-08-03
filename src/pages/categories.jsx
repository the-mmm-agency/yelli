import { List, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import CategoryListItem from 'components/categoryListItem'
import SEO from 'components/seo'
import Layout from 'components/layout'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}))

const Categories = () => {
  const classes = useStyles()

  const {
    graphcms: { categories },
  } = useStaticQuery(graphql`
    query {
      graphcms {
        categories {
          id
          name
          slug
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Categories" />
      <div className={classes.root}>
        <Typography component="h1" variant="h5">
          Categories
        </Typography>
        <Typography color="textSecondary" component="h2">
          Browse progressive web apps by category
        </Typography>
        <List>
          {categories.map(category => (
            <CategoryListItem colorful key={category.id} {...category} />
          ))}
        </List>
      </div>
    </Layout>
  )
}

export default Categories
