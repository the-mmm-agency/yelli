import { Hidden } from '@material-ui/core'
import React from 'react'
import { graphql } from 'gatsby'

import AppGrid from 'templates/appGrid'
import AppList from 'templates/appList'

const Category = ({
  data: {
    graphcms: { applications },
  },
  pageContext: { name },
}) => (
  <>
    <Hidden smUp implementation="css">
      <AppList name={name} apps={applications} />
    </Hidden>
    <Hidden smDown implementation="css">
      <AppGrid name={name} apps={applications} />
    </Hidden>
  </>
)

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
