import Link from 'components/link'
import Typography from 'components/typography'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import {
  ActionArea,
  Category,
  Icon,
} from './categoryCard.css'

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
