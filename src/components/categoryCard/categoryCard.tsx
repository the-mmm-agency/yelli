import { graphql, navigate } from 'gatsby'
import React from 'react'

import {
  Card,
  CardActionArea,
  Icon,
} from './categoryCard.css'

import Typography from 'src/elements/typography'
import { Category } from 'src/graphql-types'

const CategoryCard: React.FC<
  Pick<Category, 'name' | 'slug'>
> = ({ name, slug }) => (
  <Card>
    <CardActionArea
      onClick={() => {
        navigate(`/category/${slug}`)
      }}
    >
      <Icon name={name} />
      <Typography color="textPrimary" mt={1} variant="h6">
        {name}
      </Typography>
    </CardActionArea>
  </Card>
)

export const query = graphql`
  fragment CategoryCard on GraphCool_Category {
    id
    name
    slug
  }
`

export default CategoryCard
