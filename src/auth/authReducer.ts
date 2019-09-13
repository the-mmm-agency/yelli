import {
  Auth0DecodedHash,
  Auth0Error,
  Auth0UserProfile,
} from 'auth0-js'

import isBrowser from 'src/util/isBrowser'

export type Maybe<T> = T | null

export type AuthState = {
  user: Maybe<Auth0UserProfile>
  userId: Maybe<string>
  authResult: Maybe<Auth0DecodedHash>
  expiresOn: Maybe<number>
  isAuthenticating: boolean
  error?: Maybe<Error | Auth0Error>
  errorType?: Maybe<string>
}

export type AuthAction =
  | {
      type: 'LOGIN_USER'
      user: Auth0UserProfile
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
      const { authResult, user } = action

      const expiresOn = authResult.expiresIn
        ? authResult.expiresIn * 1000 + new Date().getTime()
        : null

      if (isBrowser()) {
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
        ...state,
        authResult,
        expiresOn,
        user,
      }
    case 'LOGOUT_USER':
      if (isBrowser()) {
        window.localStorage.removeItem('EXPIRES_ON')
        window.localStorage.removeItem('AUTH0_USER')
      }
      return {
        ...state,
        authResult: null,
        expiresOn: null,
        user: null,
      }
    case 'TOGGLE_AUTHENTICATING':
      return {
        ...state,
        isAuthenticating: !state.isAuthenticating,
      }
    case 'SET_USER_ID':
      const { id } = action
      return {
        ...state,
        userId: id,
      }
    case 'AUTH_ERROR':
      const { errorType, error } = action
      return {
        ...state,
        authResult: null,
        error,
        errorType,
        expiresOn: null,
        user: null,
      }
    default:
      return state
  }
}
