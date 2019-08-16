import { graphql } from 'gatsby'
import React from 'react'
import AppList from 'templates/appList'

const New = ({ data: { latest } }) => (
  <AppList apps={latest.applications} name="New Apps" />
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
