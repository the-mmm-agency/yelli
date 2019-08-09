import { Hidden, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import SEO from 'components/seo'
import AppList from 'templates/app-list'
import AppComponent from 'components/appComponent'
import { spacing } from 'util/theme'

const Name = styled(Typography)`
  border-bottom: 1px solid ${theme('palette.divider')};
  padding: ${spacing(2)} ${spacing(4)};
  font-weight: 500;
`

const List = styled(Grid)`
  &::after {
    content: '';
    flex: 2 0 auto;
  }
  flex-wrap: wrap;
  padding: ${spacing(3)} ${spacing(4)};
  list-style: none;
`

const Category = ({
  data: {
    graphcms: { applications },
  },
  pageContext: { name },
}) => (
  <>
    <SEO title={`${name} Apps`} />
    <Hidden smUp implementation="css">
      <AppList name={name} apps={applications} />
    </Hidden>
    <Hidden smDown implementation="css">
      <Name component="h1" variant="h5">
        {name}
      </Name>
      <List component="ul" container justify="space-between" spacing={4}>
        {applications.map(app => (
          <AppComponent key={app.id} {...app} />
        ))}
      </List>
    </Hidden>
  </>
)

export const pageQuery = graphql`
  query categoryName($id: ID!) {
    graphcms {
      applications(where: { category: { id: $id } }, orderBy: rank_ASC) {
        ...AppCard
      }
    }
  }
`

export default Category
