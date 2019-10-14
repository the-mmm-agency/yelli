import { Hidden } from '@material-ui/core'
import { graphql } from 'gatsby'
import React, { memo } from 'react'

import Grid from 'src/templates/appGrid.template'
import List from 'src/templates/appList.template'
import {
  AppPageProps,
  CategoryTemplateProps,
} from 'src/types'

const Category: React.FC<CategoryTemplateProps> = ({
  data: {
    yelli: { applications },
  },
  pageContext: { name },
}) => {
  const props: AppPageProps = {
    apps: applications,
    name,
  }
  return (
    <>
      <Hidden smDown implementation="css">
        <Grid {...props} />
      </Hidden>
      <Hidden mdUp implementation="css">
        <List {...props} />
      </Hidden>
    </>
  )
}

export const pageQuery = graphql`
  query applicationsByCategory($id: ID!) {
    yelli {
      applications(where: { category: { id: $id } }) {
        ...Application
      }
    }
  }
`

export default memo(Category)
