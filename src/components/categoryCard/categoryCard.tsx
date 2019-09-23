import { graphql } from 'gatsby'
import React from 'react'

import {
  Card,
  CardActionArea,
  Icon,
} from './categoryCard.css'

import Link from 'src/elements/link'
import Typography from 'src/elements/typography'
import { Category } from 'src/graphql-types'

const CategoryCard: React.FC<
  Pick<Category, 'name' | 'slug'>
> = ({ name, slug }) => (
  <Card>
    <CardActionArea
      component={Link}
      to={`/category/${slug}`}
    >
      <Icon name={name} />
      <Typography color="textPrimary" mt={1} variant="h6">
        {name}
      </Typography>
    </CardActionArea>
  </Card>
)

export const query = graphql`
  fragment CategoryCard on Yelli_Category {
    id
    name
    slug
  }
`

export default CategoryCard
