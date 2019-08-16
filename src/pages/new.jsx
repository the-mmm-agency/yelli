import { graphql } from 'gatsby'
import React from 'react'

import AppList from 'views/app-list'
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
        ...Application
      }
    }
  }
`

export default New
