import Auth0, {
  Auth0DecodedHash,
  Auth0Error,
} from 'auth0-js'
import { oc } from 'ts-optchain'

import { AuthAction } from './authReducer'

export interface HandleAuthTokenOptions {
  dispatch: React.Dispatch<AuthAction>
  error?: Auth0Error | Auth0.Auth0ParseHashError | null
  authResult: Auth0DecodedHash | null
}

export const handleAuthResult = ({
  dispatch,
  error,
  authResult,
}: HandleAuthTokenOptions): string | false => {
  const { idToken } = oc(authResult)
  if (idToken()) {
    window.localStorage.setItem('token', idToken(''))
    return idToken('')
  }
  dispatch({
    error: error || new Error('No Token'),
    errorType: 'handleAuthResult',
    type: 'AUTH_ERROR',
  })
  return false
}
