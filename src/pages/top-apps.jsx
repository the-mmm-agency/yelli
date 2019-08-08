import React from 'react'
import { graphql } from 'gatsby'

import AppList from 'templates/app-list'
import SEO from 'components/seo'

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
