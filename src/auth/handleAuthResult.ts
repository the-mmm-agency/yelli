import { ApolloClient } from 'apollo-boost'
import Auth0, {
  Auth0DecodedHash,
  Auth0Error,
} from 'auth0-js'
import gql from 'graphql-tag'

import { AuthAction, Maybe } from './authReducer'
import { setAuthSession } from './setAuthSession'

export interface HandleAuthTokenOptions {
  dispatch: React.Dispatch<AuthAction>
  error?: Maybe<Auth0Error | Auth0.Auth0ParseHashError>
  apolloClient: ApolloClient<any>
  auth0Client: Auth0.WebAuth
  authResult: Maybe<Auth0DecodedHash>
}

export const handleAuthResult = async ({
  dispatch,
  auth0Client,
  apolloClient,
  error,
  authResult,
}: HandleAuthTokenOptions): Promise<boolean | void> => {
  if (
    authResult &&
    authResult.accessToken &&
    authResult.idToken
  ) {
    await setAuthSession({
      auth0Client,
      authResult,
      dispatch,
    })

    try {
      const result = await apolloClient.mutate({
        mutation: gql`
          mutation auth($idToken: String!) {
            authenticate(idToken: $idToken) {
              id
            }
          }
        `,
        variables: {
          idToken: authResult.idToken,
        },
      })
      window.localStorage.setItem(
        'token',
        authResult.idToken
      )
      dispatch({
        id: result.data.authenticate.id,
        type: 'SET_USER_ID',
      })
      dispatch({
        type: 'TOGGLE_AUTHENTICATING',
      })

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
    return false
  }
}
