import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { useAuth } from 'src/auth'

const GET_USER_ID = gql`
  query favorites($auth0UserId: String!) {
    User(auth0UserId: $auth0UserId) {
      id
    }
  }
`

type UseCurrentUserId = {
  userId: null | string
  loading: boolean
}

export const useCurrentUserId = (): UseCurrentUserId => {
  const { userId: auth0UserId, isAuthenticated } = useAuth()
  const { loading, data } = useQuery(GET_USER_ID, {
    skip: !isAuthenticated(),
    variables: {
      auth0UserId,
    },
  })
  if (loading || !data || !data.User) {
    return { loading: true, userId: null }
  }
  return {
    loading: false,
    userId: data.User.id,
  }
}
