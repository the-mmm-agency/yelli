import Typography from 'components/typography'
import { graphql } from 'gatsby'
import React from 'react'

import {
  ActionArea,
  Category,
  Icon,
} from './categoryCard.css'
import { Category as CategoryType } from 'graphql-types'
import { navigate } from 'gatsby'

const CategoryCard: React.FC<
  Pick<CategoryType, 'name' | 'slug'>
> = ({ name, slug }) => (
  <Category>
    <ActionArea
      onClick={() => {
        navigate(`/category/${slug}`)
      }}
    >
      <Icon name={name} />
      <Typography color="textPrimary" mt={1} variant="h6">
        {name}
      </Typography>
    </ActionArea>
  </Category>
)

export const query = graphql`
  fragment CategoryCard on GraphCMS_Category {
    id
    name
    slug
  }
`

export default CategoryCard
