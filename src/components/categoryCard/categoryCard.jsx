import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import {
  ActionArea,
  Category,
  Icon,
} from './categoryCard.css'

import Link from 'components/link'
import Typography from 'components/typography'

const CategoryCard = ({ name, slug }) => (
  <Category>
    <ActionArea component={Link} to={`/category/${slug}`}>
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

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default CategoryCard
