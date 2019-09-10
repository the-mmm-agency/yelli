import {
  Auth0DecodedHash,
  Auth0Error,
  Auth0UserProfile,
} from 'auth0-js'
import { Draft } from 'immer'

export type Maybe<T> = T | null

export type AuthState = {
  user: Maybe<Auth0UserProfile>
  authResult: Maybe<Auth0DecodedHash>
  expiresOn: Maybe<number>
}

export type AuthAction =
  | {
      type: 'LOGIN_USER'
      user: Auth0UserProfile
      authResult: Auth0DecodedHash
    }
  | { type: 'LOGOUT_USER' }
  | { type: 'TOGGLE_AUTHENTICATING' }
  | {
      type: 'AUTH_ERROR'
      errorType: string
      error: Error | Auth0Error
    }

export const authReducer = (
  state: Draft<AuthState>,
  action: AuthAction
) => {
  switch (action.type) {
    case 'LOGIN_USER':
      const { authResult, user } = action

      const expiresOn = authResult.expiresIn
        ? authResult.expiresIn * 1000 + new Date().getTime()
        : null

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(
          'EXPIRES_ON',
          JSON.stringify(expiresOn)
        )
        window.localStorage.setItem(
          'AUTH0_USER',
          JSON.stringify(user)
        )
      }
      return {
        authResult,
        expiresOn,
        user,
      }

    case 'LOGOUT_USER':
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('EXPIRES_ON')
        window.localStorage.removeItem('AUTH0_USER')
      }
      return {
        authResult: null,
        expiresOn: null,
        user: null,
      }
    case 'AUTH_ERROR':
      const { errorType, error } = action
      return {
        authResult: null,
        authenticating: false,
        error,
        errorType,
        expiresOn: null,
        user: null,
      }
    default:
      return state
  }
}
