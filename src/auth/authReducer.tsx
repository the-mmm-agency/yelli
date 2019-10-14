import { Button } from '@material-ui/core'
import {
  Auth0DecodedHash,
  Auth0Error,
  WebAuth,
} from 'auth0-js'
import React from 'react'

import { Enqueue } from 'src/hooks/useSnackbar'

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
      errorType: 'checkSession' | 'handleAuth'
      auth0: WebAuth
      enqueue: Enqueue
      error: Error | Auth0Error
    }

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'LOGIN_USER':
      const { authResult } = action
      const expiresAt = authResult.expiresIn
        ? authResult.expiresIn * 1000 + new Date().getTime()
        : null
      window.localStorage.setItem(
        'token',
        authResult.idToken as string
      )
      return {
        authResult,
        error: null,
        errorType: null,
        expiresAt,
        isAuthenticating: false,
      }
    case 'LOGOUT_USER':
      window.localStorage.removeItem('token')
      return {
        authResult: null,
        error: null,
        errorType: null,
        expiresAt: null,
        isAuthenticating: false,
      }
    case 'START_AUTHENTICATING':
      return {
        isAuthenticating: true,
        ...state,
      }
    case 'STOP_AUTHENTICATING':
      return {
        isAuthenticating: false,
        ...state,
      }
    case 'AUTH_ERROR':
      const { auth0, enqueue, errorType, error } = action
      window.localStorage.removeItem('token')
      enqueue(
        errorType === 'checkSession'
          ? 'Silent auth failed'
          : 'Login failed',
        {
          action: (
            <Button
              color="secondary"
              onClick={() => {
                auth0.authorize()
              }}
            >
              {errorType === 'checkSession'
                ? 'login'
                : 'retry'}
            </Button>
          ),
        }
      )
      console.error(error)
      return {
        authResult: null,
        error,
        errorType,
        expiresAt: null,
        isAuthenticating: false,
      }
    default:
      return state
  }
}
