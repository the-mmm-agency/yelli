import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { graphql } from 'gatsby'
import React from 'react'

import CategoryCard from 'components/categoryCard'
import SEO from 'components/seo'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
}))

const Categories = ({
  data: {
    graphcms: { categories },
  },
}) => {
  const classes = useStyles()
  return (
    <>
      <SEO title="Categories" />
      <Grid className={classes.root} container spacing={2}>
        {categories.map(({ id, ...category }) => (
          <CategoryCard key={id} {...category} />
        ))}
      </Grid>
    </>
  )
}

export const query = graphql`
  query {
    graphcms {
      categories {
        ...CategoryCard
      }
    }
  }
`

export default Categories
