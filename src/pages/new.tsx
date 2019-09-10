import { graphql } from 'gatsby'
import React from 'react'

import AppList from 'src/templates/appList.template'
import { GraphCoolAppList } from 'src/types'

const New: React.FC<GraphCoolAppList> = ({
  data: {
    graphcool: { allApplications },
  },
}) => <AppList apps={allApplications} name="New Apps" />

export const query = graphql`
  {
    graphcool {
      allApplications(
        first: 30
        orderBy: createdAt_ASC
        filter: { published: true }
      ) {
        ...Application
      }
    }
  }
`

export default New
