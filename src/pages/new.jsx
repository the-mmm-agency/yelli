import { graphql } from 'gatsby'
import React from 'react'

import AppList from 'templates/app-list'
import SEO from 'components/seo'

const New = ({ data: { latest } }) => (
  <>
    <SEO title="New Apps" />
    <AppList name="New Apps" apps={latest.applications} />
  </>
)

export const query = graphql`
  query newApps {
    latest: graphcms {
      applications(first: 30, orderBy: createdAt_ASC) {
        ...AppCard
      }
    }
  }
`

export default New
