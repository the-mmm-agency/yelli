import { Card, CardActionArea, Grid } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import Link from 'components/link'
import CategoryIcon from 'components/categoryIcon'
import Typography from 'components/typography'
import { down, spacing, transitions } from 'util/theme'

const ActionArea = styled(CardActionArea)`
  ${down('sm')} {
    padding: ${spacing(3)};
  }
  padding: ${spacing(5)};
`

const Category = styled(Card)`
  &:hover {
    background-color: ${theme('palette.background.paper')};
    background-size: auto 105%;
    border-color: transparent;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
  align-items: center;
  background-color: ${theme('palette.background.default')};
  border: 1px solid ${theme('palette.divider')};
  border-radius: ${theme('shape.borderRadius')};
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: ${transitions(
    ['border-color', 'opacity', 'box-shadow', 'background-size', 'transform'],
    {
      duration: theme('transitions.duration.complex'),
      easing: theme('transitions.easing.sharp'),
    }
  )};
`

const Icon = styled(CategoryIcon)`
  color: ${theme('palette.primary.main')};
  font-size: 1.5rem;
  height: 2em;
  width: 2em;
`

const CategoryCard = ({ name, slug }) => (
  <Grid item xs={6} md={4}>
    <Category>
      <ActionArea
        component={Link}
        to={`/category/${slug}`}
      >
        <Icon name={name} />
        <Typography color="textPrimary" mt={1} variant="h6">
          {name}
        </Typography>
      </ActionArea>
    </Category>
  </Grid>
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
