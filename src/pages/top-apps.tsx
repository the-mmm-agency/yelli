import { graphql } from 'gatsby'
import React from 'react'

import { GraphCoolAppList } from '../types'

import AppList from 'src/templates/appList.template'

const TopApps: React.FC<GraphCoolAppList> = ({
  data: {
    graphcool: { allApplications },
  },
}) => <AppList apps={allApplications} name="Top Apps" />

export const query = graphql`
  {
    graphcool {
      allApplications(first: 30, orderBy: rank_ASC) {
        ...Application
      }
    }
  }
`

export default TopApps
