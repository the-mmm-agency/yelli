import { useMutation, useQuery } from '@apollo/react-hooks'
import { oc } from 'ts-optchain'

import { useAuth } from 'src/auth'
import { action } from 'src/components/favorite'
import CHECK_FAVORITE from 'src/graphql/checkFavorite.query.gql'
import FAVORITE from 'src/graphql/favorite.mutation.gql'
import FAVORITES from 'src/graphql/favorites.query.gql'
import { useSnackbar } from 'src/hooks/useSnackbar'

export const useFavorite = (
  id: string,
  title: string
): [boolean, VoidFunction] => {
  const { isAuthenticated } = useAuth()
  const { enqueue } = useSnackbar()

  const { data } = useQuery<{
    application: { favorite: boolean }
  }>(CHECK_FAVORITE, {
    fetchPolicy: 'cache-only',
    skip: !isAuthenticated(),
    variables: { id },
  })

  const value = oc(data).application.favorite(false)

  const [toggle] = useMutation<{
    __typename: 'Mutation'
    toggleFavorite: boolean
  }>(FAVORITE, {
    onCompleted: ({ toggleFavorite }): void => {
      const message = toggleFavorite
        ? `Added ${title} to favorites`
        : `Removed ${title} from favorites`
      enqueue(message, {
        action,
      })
    },
    optimisticResponse: {
      __typename: 'Mutation',
      toggleFavorite: !value,
    },
    refetchQueries: [
      { query: FAVORITES },
      { query: CHECK_FAVORITE, variables: { id } },
    ],
    update: (cache, result) => {
      if (result.data) {
        cache.writeQuery({
          data: {
            application: {
              __typename: 'Application',
              favorite: result.data.toggleFavorite,
              id,
            },
          },
          query: CHECK_FAVORITE,
          variables: { id },
        })
      }
    },
  })

  const handleClick = (): void => {
    toggle({ variables: { id } })
  }

  return [value, handleClick]
}
