import { Auth0DecodedHash, Auth0Error } from 'auth0-js'

export type Maybe<T> = T | null

export type AuthState = {
  authResult: Maybe<Auth0DecodedHash>
  error?: Maybe<Error | Auth0Error>
  errorType?: Maybe<string>
}

export type AuthAction =
  | {
      type: 'LOGIN_USER'
      authResult: Auth0DecodedHash
    }
  | { type: 'LOGOUT_USER' }
  | { type: 'TOGGLE_AUTHENTICATING' }
  | { type: 'SET_USER_ID'; id: string }
  | {
      type: 'AUTH_ERROR'
      errorType: string
      error: Error | Auth0Error
    }

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOGIN_USER':
      const { authResult } = action
      return {
        ...state,
        authResult,
      }
    case 'LOGOUT_USER':
      window.localStorage.removeItem('token')
      return {
        ...state,
        authResult: null,
      }
    case 'AUTH_ERROR':
      const { errorType, error } = action
      window.localStorage.removeItem('token')
      return {
        ...state,
        authResult: null,
        error,
        errorType,
      }
    default:
      return state
  }
}
