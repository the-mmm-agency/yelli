import { ApolloClient } from 'apollo-boost'
import Auth0, {
  Auth0DecodedHash,
  Auth0Error,
} from 'auth0-js'

import { AuthAction, Maybe } from './authReducer'

import { AUTH } from 'src/graphql/mutations'

export interface HandleAuthTokenOptions {
  dispatch: React.Dispatch<AuthAction>
  error?: Maybe<Auth0Error | Auth0.Auth0ParseHashError>
  apolloClient: ApolloClient<any>
  authResult: Maybe<Auth0DecodedHash>
}

export const handleAuthResult = async ({
  dispatch,
  apolloClient,
  error,
  authResult,
}: HandleAuthTokenOptions): Promise<boolean | void> => {
  if (
    authResult &&
    authResult.accessToken &&
    authResult.idToken
  ) {
    try {
      await apolloClient.mutate({
        mutation: AUTH,
        variables: {
          idToken: authResult.idToken,
        },
      })
      window.localStorage.setItem(
        'token',
        authResult.idToken
      )
      return true
    } catch (error_) {
      dispatch({
        error: error_,
        errorType: 'handleAuthResult',
        type: 'AUTH_ERROR',
      })
      return false
    }
  } else if (error) {
    dispatch({
      error,
      errorType: 'handleAuthResult',
      type: 'AUTH_ERROR',
    })
  }
  return false
}
