import { useQuery } from '@apollo/react-hooks'
import React from 'react'
import { oc } from 'ts-optchain'

import { FAVORITES } from 'src/graphql/queries'
import { useAuthRedirect } from 'src/hooks/useAuthRedirect'
import AppList from 'src/templates/appList.template'
import { Applications } from 'src/types'
import isBrowser from 'src/util/isBrowser'

const Favorites: React.FC = () => {
  if (!isBrowser()) return null

  useAuthRedirect()
  const favorites = oc(
    useQuery<{ me: { favorites: Applications } }>(
      FAVORITES,
      {
        fetchPolicy: 'cache-and-network',
      }
    )
  ).data.me.favorites()

  return (
    <AppList
      apps={favorites}
      name="Favorites"
      variant="favorite"
    />
  )
}

export default Favorites
