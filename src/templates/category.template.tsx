import { Hidden } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'
import Grid from 'templates/appGrid.template'
import List from 'templates/appList.template'
import { Category as CategoryType } from 'graphql-types'
import {
  ApplicationProps,
  WithAppID,
  AppPageProps,
} from 'types'

interface CategoryProps {
  data: {
    graphcms: {
      applications: WithAppID<ApplicationProps>[]
    }
  }
  pageContext: Pick<CategoryType, 'name'>
}

const Category: React.FC<CategoryProps> = ({
  data: {
    graphcms: { applications },
  },
  pageContext: { name },
}) => {
  const props = {
    apps: applications,
    name,
  } as AppPageProps
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
