import { Hidden } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import Grid from 'src/templates/appGrid.template'
import List from 'src/templates/appList.template'
import {
  AppPageProps,
  CategoryTemplateProps,
} from 'src/types'

const Category: React.FC<CategoryTemplateProps> = ({
  data: {
    graphcool: { allApplications },
  },
  pageContext: { name },
}) => {
  const props: AppPageProps = {
    apps: allApplications,
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
  query applicationsByCategory($id: ID!) {
    graphcool {
      allApplications(
        filter: { category: { id: $id } }
        orderBy: rank_ASC
      ) {
        ...Application
      }
    }
  }
`

export default Category
