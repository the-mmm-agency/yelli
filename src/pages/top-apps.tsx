import { graphql } from 'gatsby'
import React from 'react'
import AppList from 'templates/appList.template'
import { ApplicationsList } from 'types'

interface TopAppsProps {
  data: {
    top: ApplicationsList
  }
}

const TopApps: React.FC<TopAppsProps> = ({
  data: { top },
}) => <AppList apps={top.applications} name="Top Apps" />

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
