import { Hidden } from '@material-ui/core'
import React from 'react'
import { graphql } from 'gatsby'

import Grid from 'templates/appGrid'
import List from 'templates/appList'

const Category = ({
  data: {
    graphcms: { applications },
  },
  pageContext: { name },
}) => {
  const props = {
    name,
    apps: applications,
  }
  return (
    <>
      <Hidden mdUp>
        <List {...props} />
      </Hidden>
      <Hidden smDown>
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
