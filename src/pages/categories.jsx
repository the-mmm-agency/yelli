import React from 'react'
import { Grid as MuiGrid } from '@material-ui/core'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import { spacing } from 'util/theme'
import CategoryCard from 'components/categoryCard'
import SEO from 'components/seo'

const Grid = styled(MuiGrid)`
  background-color: ${theme('palette.background.paper')};
  padding: ${spacing(2)};
`

const Categories = ({
  data: {
    graphcms: { categories },
  },
}) => (
  <>
    <SEO title="Categories" />
    <Grid container spacing={2}>
      {categories.map(({ id, ...category }) => (
        <CategoryCard key={id} {...category} />
      ))}
    </Grid>
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
