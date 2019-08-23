import CategoryCard from 'components/categoryCard'
import Flex from 'components/flex'
import SEO from 'components/seo'
import { graphql } from 'gatsby'
import React from 'react'
import { Category } from 'graphql-types'

interface CategoriesProps {
  data: {
    graphcms: {
      categories: Array<Category>
    }
  }
}

const Categories: React.FC<CategoriesProps> = ({
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
