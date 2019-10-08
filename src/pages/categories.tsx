import { graphql } from 'gatsby'
import React from 'react'

import { WithYelli } from '../types'

import CategoryCard from 'src/components/categoryCard'
import SEO from 'src/components/seo'
import Flex from 'src/elements/flex'
import { Category } from 'src/graphql-types'

type CategoriesProps = WithYelli<{
  categories: Array<Omit<Category, 'applications'>>
}>

const Categories: React.FC<CategoriesProps> = ({
  data: {
    yelli: { categories },
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
  query categories {
    yelli {
      categories {
        ...CategoryCard
      }
    }
  }
`

export default Categories
