import { CircularProgress } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import Flex from 'src/elements/flex'
import { useAuthRedirect } from 'src/hooks/useAuthRedirect'
import { useFavorite } from 'src/hooks/useFavorite'
import AppList from 'src/templates/appList.template'
import { GraphCoolAppList } from 'src/types'

const Favorites: React.FC<GraphCoolAppList> = ({
  data: {
    graphcool: { allApplications },
  },
}) => {
  useAuthRedirect()
  const { check, loading } = useFavorite()
  return loading ? (
    <Flex height="75vh">
      <CircularProgress
        css={{ margin: 'auto' }}
        size="5vw"
      />
    </Flex>
  ) : (
    <AppList
      apps={allApplications.filter(({ id }) => check(id))}
      name="Favorites"
    />
  )
}

export const query = graphql`
  {
    graphcool {
      allApplications(filter: { published: true }) {
        ...Application
      }
    }
  }
`

export default Favorites
