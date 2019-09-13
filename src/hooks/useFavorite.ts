import { useMutation, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useSnackbar } from 'notistack'
import { has, pluck, without } from 'ramda'
import { useEffect } from 'react'

import { useAuth } from 'src/auth'
import { action } from 'src/components/favorite'
import { useBoolean } from 'src/hooks/useBoolean'
import isBrowser from 'src/util/isBrowser'

const GET_USER = gql`
  query favorites($userId: ID!) {
    User(id: $userId) {
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

const getIds = pluck('id')

export const useFavorites = (): {
  check: (id: string) => boolean
  favorites: string[]
  loading: boolean
} => {
  if (!isBrowser())
    return {
      check: () => false,
      favorites: [],
      loading: true,
    }
  const { userId } = useAuth()
  const { data, loading } = useQuery(GET_USER, {
    fetchPolicy: 'network-only',
    skip: userId === null,
    ssr: false,
    variables: {
      userId,
    },
  })
  const favorites: string[] =
    userId !== null && !loading && data && has('User', data)
      ? getIds(data.User.favorites)
      : []
  const check = (id: string): boolean =>
    favorites.includes(id)
  return {
    check,
    favorites,
    loading,
  }
}

export const useFavorite = (
  id: string,
  title: string
): [boolean, VoidFunction] => {
  const { userId } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const { check, favorites, loading } = useFavorites()
  const {
    value: hasFavorite,
    setFalse,
    setTrue,
    setValue,
  } = useBoolean(false)
  const [setFavorites] = useMutation(ADD_FAVORITE, {
    onCompleted: (): void => {
      enqueueSnackbar(
        `${hasFavorite ? 'Added' : 'Removed'} ${title} ${
          hasFavorite ? 'to' : 'from'
        } favorites`,
        {
          action,
          autoHideDuration: 2000,
        }
      )
    },
  })

  useEffect(() => {
    if (!loading) {
      setValue(check(id))
    }
  }, [loading])

  if (!loading) {
    const updateFavorites = (ids: string[]): void => {
      setFavorites({
        variables: {
          favorites: ids,
          userId,
        },
      })
    }
    const add: VoidFunction = () => {
      setTrue()
      updateFavorites([...favorites, id])
    }
    const remove: VoidFunction = () => {
      setFalse()
      updateFavorites(without([id], favorites))
    }
    const toggle: VoidFunction = () =>
      hasFavorite ? remove() : add()
    return [hasFavorite, toggle]
  }
  return [false, () => null]
}
