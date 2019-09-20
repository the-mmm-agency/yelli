import { graphql } from 'gatsby'
import React from 'react'

import AppList from 'src/templates/appList.template'
import { GraphCoolAppList } from 'src/types'

const New: React.FC<GraphCoolAppList> = ({
  data: {
    graphcool: { applications },
  },
}) => <AppList apps={applications} name="New Apps" />

export const query = graphql`
  {
    graphcool {
      applications(
        first: 30
        orderBy: { createdAt: asc }
        where: { published: { equals: true } }
      ) {
        ...Application
      }
    }
  }
`

export default New
