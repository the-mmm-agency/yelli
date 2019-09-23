import { graphql } from 'gatsby'
import React from 'react'

import AppList from 'src/templates/appList.template'
import { AppList as Props } from 'src/types'

const New: React.FC<Props> = ({
  data: {
    yelli: { applications },
  },
}) => <AppList apps={applications} name="New Apps" />

export const query = graphql`
  {
    yelli {
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
