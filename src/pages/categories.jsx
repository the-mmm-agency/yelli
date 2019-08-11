import React from 'react'
import { graphql } from 'gatsby'

import CategoryCard from 'components/categoryCard'
import SEO from 'components/seo'
import Flex from 'components/flex'

const Categories = ({
  data: {
    graphcms: { categories },
  },
}) => (
  <>
    <SEO title="Categories" />
    <Flex bgcolor="background.paper" flexWrap="wrap" padding={1}>
      {categories.map(({ id, ...category }) => (
        <CategoryCard key={id} {...category} />
      ))}
    </Flex>
  </>
)

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
