import { Hidden } from '@material-ui/core'
import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'components/seo'
import Flex from 'components/flex'
import AppGrid from 'components/appGrid'
import AppList from 'views/app-list'

const Category = ({
  data: {
    graphcms: { applications },
  },
  pageContext: { name },
}) => (
  <Flex flexDirection="column">
    <SEO title={`${name} Apps`} />
    <Hidden smUp implementation="css">
      <AppList name={name} apps={applications} />
    </Hidden>
    <Hidden smDown implementation="css">
      <AppGrid name={name} apps={applications} />
    </Hidden>
  </Flex>
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
