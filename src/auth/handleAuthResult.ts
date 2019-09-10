import Auth0, {
  Auth0DecodedHash,
  Auth0Error,
} from 'auth0-js'

import { AuthAction, Maybe } from './authReducer'
import { setAuthSession } from './setAuthSession'

export interface HandleAuthTokenOptions {
  dispatch: React.Dispatch<AuthAction>
  error?: Maybe<Auth0Error | Auth0.Auth0ParseHashError>
  auth0Client: Auth0.WebAuth
  authResult: Maybe<Auth0DecodedHash>
}

export const handleAuthResult = async ({
  dispatch,
  auth0Client,
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

    return true
  } else if (error) {
    dispatch({
      error,
      errorType: 'handleAuthResult',
      type: 'AUTH_ERROR',
    })
    return false
  }
}
