import { useMutation, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useSnackbar } from 'notistack'
import { has, pluck } from 'ramda'
import { useEffect } from 'react'

import { useAuth } from 'src/auth'
import { action } from 'src/components/favorite'
import { useBoolean } from 'src/hooks/useBoolean'
import isBrowser from 'src/util/isBrowser'

const GET_FAVORITES = gql`
  query myFavorites {
    me {
      favorites {
        id
      }
    }
  }
`

const FAVORITE = gql`
  mutation favorite($id: ID!) {
    favorite(id: $id) {
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
  const { isAuthenticated } = useAuth()
  const { data, loading } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'network-only',
    skip: !isAuthenticated(),
    ssr: false,
  })
  const favorites: string[] =
    isAuthenticated() && !loading && data && has('me', data)
      ? getIds(data.me.favorites)
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
  const { enqueueSnackbar } = useSnackbar()
  const { check, loading } = useFavorites()
  const {
    value: hasFavorite,
    setFalse,
    setTrue,
    setValue,
  } = useBoolean(false)
  const [favorite] = useMutation(FAVORITE, {
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
    const updateFavorites = (id: string): void => {
      favorite({
        variables: {
          id,
        },
      })
    }
    const add: VoidFunction = () => {
      setTrue()
      updateFavorites(id)
    }
    const remove: VoidFunction = () => {
      setFalse()
      updateFavorites(id)
    }
    const toggle: VoidFunction = () =>
      hasFavorite ? remove() : add()
    return [hasFavorite, toggle]
  }
  return [false, () => null]
}
