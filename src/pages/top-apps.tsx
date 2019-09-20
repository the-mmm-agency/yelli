import { graphql } from 'gatsby'
import React from 'react'

import { GraphCoolAppList } from '../types'

import AppList from 'src/templates/appList.template'

const TopApps: React.FC<GraphCoolAppList> = ({
  data: {
    graphcool: { applications },
  },
}) => <AppList apps={applications} name="Top Apps" />

export const query = graphql`
  {
    graphcool {
      applications(
        first: 30
        orderBy: { rank: asc }
        where: { published: { equals: true } }
      ) {
        ...Application
      }
    }
  }
`

export default TopApps
