import { useQuery } from '@apollo/react-hooks'
import { useAuth } from '@brettm12345/react-auth-hook'
import gql from 'graphql-tag'

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
