import CategoryCard from 'components/categoryCard'
import Flex from 'components/flex'
import SEO from 'components/seo'
import { graphql } from 'gatsby'
import React from 'react'

const Categories = ({
  data: {
    graphcms: { categories },
  },
}) => (
  <>
    <SEO title="Categories" />
    <Flex
      bgcolor="background.paper"
      flexWrap="wrap"
      padding={1}
    >
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
