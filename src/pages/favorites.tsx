import { CircularProgress } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import { useFavorites } from '../hooks/useFavorite'

import Flex from 'src/elements/flex'
import { useAuthRedirect } from 'src/hooks/useAuthRedirect'
import AppList from 'src/templates/appList.template'
import { GraphCoolAppList } from 'src/types'

const Favorites: React.FC<GraphCoolAppList> = ({
  data: {
    graphcool: { applications },
  },
}) => {
  useAuthRedirect()
  const { check, loading } = useFavorites()
  return loading ? (
    <Flex height="75vh">
      <CircularProgress
        css={{ margin: 'auto' }}
        size="5vw"
      />
    </Flex>
  ) : (
    <AppList
      apps={applications.filter(({ id }) => check(id))}
      name="Favorites"
    />
  )
}

export const query = graphql`
  {
    graphcool {
      applications(where: { published: { equals: true } }) {
        ...Application
      }
    }
  }
`

export default Favorites
