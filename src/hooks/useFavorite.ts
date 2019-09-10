import { ExecutionResult } from '@apollo/react-common'
import { useMutation, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { has, pluck, without } from 'ramda'

import { useAuth } from 'src/auth'

const GET_USER = gql`
  query favorites($auth0UserId: String!) {
    User(auth0UserId: $auth0UserId) {
      id
      favorites {
        id
      }
    }
  }
`

const ADD_FAVORITE = gql`
  mutation setFavorites($userId: ID!, $favorites: [ID!]!) {
    updateUser(id: $userId, favoritesIds: $favorites) {
      favorites {
        id
      }
    }
  }
`

type FavoriteVoid = (id: string) => void
type FavoriteBool = (id: string) => boolean

type UseFavorite = {
  add: FavoriteVoid
  remove: FavoriteVoid
  toggle: FavoriteVoid
  check: FavoriteBool
  loading: boolean
}

const getIds = pluck('id')

const isBrowser = typeof window !== 'undefined'

export const useFavorite = (): UseFavorite => {
  if (isBrowser) {
    const { userId: auth0UserId } = useAuth()
    const { loading, data, refetch } = useQuery(GET_USER, {
      fetchPolicy: 'network-only',
      skip: auth0UserId === null,
      ssr: false,
      variables: {
        auth0UserId,
      },
    })
    const [setFavorites] = useMutation(ADD_FAVORITE)

    if (!loading && data && has('User', data)) {
      const favorites: string[] =
        data.User.favorites !== []
          ? getIds(data.User.favorites)
          : []

      const {
        User: { id: userId },
      } = data

      const updateFavorites = (
        ids: string[]
      ): Promise<ExecutionResult<any>> =>
        setFavorites({
          variables: {
            favorites: ids,
            userId,
          },
        })

      const add: FavoriteVoid = id => {
        updateFavorites([...favorites, id])
      }
      const remove: FavoriteVoid = id => {
        updateFavorites(without([id], favorites))
      }
      const check: FavoriteBool = id =>
        favorites.includes(id)
      const toggle: FavoriteVoid = id => {
        check(id) ? remove(id) : add(id)
      }

      return {
        add,
        check,
        loading: false,
        remove,
        toggle,
      }
    }
  }
  return {
    add: () => null,
    check: () => false,
    loading: true,
    remove: () => null,
    toggle: () => null,
  } as UseFavorite
}
