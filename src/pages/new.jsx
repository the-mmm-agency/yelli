import { graphql } from 'gatsby'
import React from 'react'

import AppList from 'templates/appList'

const New = ({ data: { latest } }) => (
  <AppList name="New Apps" apps={latest.applications} />
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
