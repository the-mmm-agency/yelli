import { graphql } from 'gatsby'
import React from 'react'
import AppList from 'templates/appList'

const TopApps = ({ data: { top } }) => (
  <AppList apps={top.applications} name="Top Apps" />
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
