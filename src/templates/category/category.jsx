import { Hidden } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'
import Grid from 'templates/appGrid'
import List from 'templates/appList'

const Category = ({
  data: {
    graphcms: { applications },
  },
  pageContext: { name },
}) => {
  const props = {
    apps: applications,
    name,
  }
  return (
    <>
      <Hidden mdUp implementation="css">
        <List {...props} />
      </Hidden>
      <Hidden smDown implementation="css">
        <Grid {...props} />
      </Hidden>
    </>
  )
}

export const pageQuery = graphql`
  query categoryName($id: ID!) {
    graphcms {
      applications(
        where: { category: { id: $id } }
        orderBy: rank_ASC
      ) {
        ...Application
      }
    }
  }
`

export default Category
