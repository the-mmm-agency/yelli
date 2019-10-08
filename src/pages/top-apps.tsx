import { graphql } from 'gatsby'
import React from 'react'

import { AppList as Props } from '../types'

import AppList from 'src/templates/appList.template'

const TopApps: React.FC<Props> = ({
  data: {
    yelli: { applications },
  },
}) => <AppList apps={applications} name="Top Apps" />

export const query = graphql`
  {
    yelli {
      applications(first: 30, orderBy: rank_DESC) {
        ...Application
      }
    }
  }
`

export default TopApps
