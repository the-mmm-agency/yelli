import React from 'react'
import { graphql } from 'gatsby'

import AppList from 'templates/appList'

const TopApps = ({ data: { top } }) => (
  <AppList name="Top Apps" apps={top.applications} />
)

export const query = graphql`
  query topList {
    top: graphcms {
      applications(first: 30, orderBy: rank_ASC) {
        ...Application
      }
    }
  }
`

export default TopApps
