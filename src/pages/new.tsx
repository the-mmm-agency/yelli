import { graphql } from 'gatsby'
import React from 'react'

import { GraphCoolAppList } from '../types'

import AppList from 'src/templates/appList.template'

const New: React.FC<GraphCoolAppList> = ({
  data: {
    graphcool: { allApplications },
  },
}) => <AppList apps={allApplications} name="New Apps" />

export const query = graphql`
  {
    graphcool {
      allApplications(first: 30, orderBy: createdAt_ASC) {
        ...Application
      }
    }
  }
`

export default New
