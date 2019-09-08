import { graphql } from 'gatsby'
import React from 'react'

import CategoryCard from 'src/components/categoryCard'
import SEO from 'src/components/seo'
import Flex from 'src/elements/flex'
import { Category } from 'src/graphql-types'

interface CategoriesProps {
  data: {
    graphcool: {
      allCategories: Category[]
    }
  }
}

const Categories: React.FC<CategoriesProps> = ({
  data: {
    graphcool: { allCategories: categories },
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
    graphcool {
      allCategories {
        ...CategoryCard
      }
    }
  }
`

export default Categories
