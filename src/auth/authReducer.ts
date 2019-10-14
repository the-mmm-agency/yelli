import { Auth0DecodedHash, Auth0Error } from 'auth0-js'

export type AuthState = {
  authResult: Auth0DecodedHash | null
  isAuthenticating: boolean
  expiresAt: number | null
  error?: Error | Auth0Error | null
  errorType?: string | null
}

export type AuthAction =
  | {
      type: 'LOGIN_USER'
      authResult: Auth0DecodedHash
    }
  | { type: 'LOGOUT_USER' }
  | { type: 'START_AUTHENTICATING' }
  | { type: 'STOP_AUTHENTICATING' }
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
    case 'START_AUTHENTICATING':
      return {
        ...state,
        isAuthenticating: true,
      }
    case 'STOP_AUTHENTICATING':
      return {
        ...state,
        isAuthenticating: false,
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
