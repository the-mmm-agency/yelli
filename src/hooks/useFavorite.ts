import { useMutation, useQuery } from '@apollo/react-hooks'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

import { useAuth } from 'src/auth'
import { action } from 'src/components/favorite'
import CHECK_FAVORITE from 'src/graphql/checkFavorite.query.gql'
import FAVORITE from 'src/graphql/favorite.mutation.gql'
import FAVORITES from 'src/graphql/favorites.query.gql'

export const useFavorite = (
  id: string,
  title: string
): [boolean, VoidFunction] => {
  const { isAuthenticated } = useAuth()
  const { enqueueSnackbar } = useSnackbar()
  const [value, setValue] = useState(false)

  useQuery<{ hasFavorite: boolean }>(CHECK_FAVORITE, {
    fetchPolicy: 'network-only',
    onCompleted: ({ hasFavorite }): void => {
      setValue(hasFavorite)
    },
    skip: !isAuthenticated(),
    variables: { id },
  })

  const [toggle] = useMutation<{ favorite: boolean }>(
    FAVORITE,
    {
      onCompleted: ({ favorite }): void => {
        const message = favorite
          ? `Added ${title} to favorites`
          : `Removed ${title} from favorites`
        enqueueSnackbar(message, {
          action,
          autoHideDuration: 1500,
        })
      },
      refetchQueries: [{ query: FAVORITES }],
    }
  )

  const handleClick = (): void => {
    setValue(!value)
    toggle({ variables: { id } })
  }

  return [value, handleClick]
}
