import {
  MutationHookOptions,
  useMutation,
  useQuery,
} from '@apollo/react-hooks'
import { Button } from '@material-ui/core'
import { DataProxy } from 'apollo-cache'
import { PureQueryOptions } from 'apollo-client'
import { navigate } from 'gatsby'
import React from 'react'
import { oc } from 'ts-optchain'

import { useAuth } from 'src/auth'
import { TOGGLE_FAVORITE } from 'src/graphql/mutations'
import {
  CHECK_FAVORITE,
  FAVORITES,
} from 'src/graphql/queries'
import { useSnackbar } from 'src/hooks/useSnackbar'

interface ToggleFavorite {
  __typename: 'Mutation'
  toggleFavorite: boolean
}

const refetch = (id: string): PureQueryOptions[] => [
  { query: FAVORITES },
  { query: CHECK_FAVORITE, variables: { id } },
]

const updateCache = (
  cache: DataProxy,
  value: boolean,
  id: string
): void => {
  cache.writeQuery({
    data: {
      application: {
        __typename: 'Application',
        favorite: value,
        id,
      },
    },
    query: CHECK_FAVORITE,
    variables: { id },
  })
}

export const useFavorite = (
  id: string,
  title: string
): [boolean, VoidFunction] => {
  const { isAuthenticated } = useAuth()
  const { enqueue } = useSnackbar()

  const { data } = useQuery<{
    application: { favorite: boolean }
  }>(CHECK_FAVORITE, {
    fetchPolicy: 'cache-first',
    skip: !isAuthenticated(),
    variables: { id },
  })

  const value = oc(data).application.favorite(false)

  const [toggle] = useMutation<ToggleFavorite>(
    TOGGLE_FAVORITE,
    {
      onCompleted: ({ toggleFavorite }): void => {
        const message = toggleFavorite
          ? `Added ${title} to favorites`
          : `Removed ${title} from favorites`
        enqueue(message, {
          action: (
            <Button
              color="secondary"
              onClick={(): void => {
                navigate('/favorites')
              }}
              role="link"
            >
              Show List
            </Button>
          ),
        })
      },
      optimisticResponse: {
        __typename: 'Mutation',
        toggleFavorite: !value,
      },
      refetchQueries: refetch(id),
      update: (cache, result) => {
        if (result.data) {
          updateCache(cache, result.data.toggleFavorite, id)
        }
      },
    }
  )

  const handleClick = (): void => {
    toggle({ variables: { id } })
  }

  return [value, handleClick]
}

export const useRemoveFavorite = (
  id: string,
  title: string
): VoidFunction => {
  const { enqueue } = useSnackbar()
  const args = (
    value = false
  ): MutationHookOptions<
    ToggleFavorite,
    { id: string }
  > => ({
    refetchQueries: refetch(id),
    update: cache => updateCache(cache, value, id),
  })

  const [undo] = useMutation(TOGGLE_FAVORITE, args(true))

  const [remove] = useMutation(TOGGLE_FAVORITE, {
    onCompleted: (): void => {
      enqueue(`Removed ${title} from favorites`, {
        action: (
          <Button
            color="secondary"
            onClick={() => {
              undo({ variables: { id } })
            }}
          >
            undo
          </Button>
        ),
      })
    },
    ...args(false),
  })

  const handleClick = (): void => {
    remove({ variables: { id } })
  }

  return handleClick
}
