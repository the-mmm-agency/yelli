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
  query new {
    yelli {
      applications(first: 30, orderBy: createdAt_ASC) {
        ...Application
      }
    }
  }
`

export default New
