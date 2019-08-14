import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'components/seo'
import AppList from 'views/app-list'

const TopApps = ({ data: { top } }) => (
  <>
    <SEO title="Top Apps" />
    <AppList name="Top Apps" apps={top.applications} />
  </>
)

export const query = graphql`
  query topList {
    top: graphcms {
      applications(first: 30, orderBy: rank_ASC) {
        ...AppCard
      }
    }
  }
`

export default TopApps
