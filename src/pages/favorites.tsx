import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'
import React from 'react'

import Flex from 'src/elements/flex'
import FAVORITES from 'src/graphql/favorites.query.gql'
import { useAuthRedirect } from 'src/hooks/useAuthRedirect'
import AppList from 'src/templates/appList.template'
import { Applications } from 'src/types'
import isBrowser from 'src/util/isBrowser'

const Favorites: React.FC = () => {
  if (!isBrowser()) return null

  useAuthRedirect()
  const { data, loading } = useQuery<
    Record<'favorites', Applications>
  >(FAVORITES)

  return loading || !data || !data.favorites ? (
    <Flex height="75vh">
      <CircularProgress
        css={{ margin: 'auto' }}
        size="5vw"
      />
    </Flex>
  ) : (
    <AppList apps={data.favorites} name="Favorites" />
  )
}

export default Favorites
