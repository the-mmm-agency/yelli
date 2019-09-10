import Auth0 from 'auth0-js'
import React, { useEffect } from 'react'
import { useImmerReducer } from 'use-immer'

import {
  AuthAction,
  AuthState,
  authReducer,
} from './authReducer'
import { handleAuthResult } from './handleAuthResult'

export interface AuthContext {
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
  auth0Client: Auth0.WebAuth
  callbackDomain: string
  navigate: any
}

export const AuthContext = React.createContext<AuthContext>(
  {} as AuthContext
)

export interface AuthProvider {
  auth0Domain: string
  auth0ClientId: string
  navigate: any
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProvider> = ({
  auth0Domain,
  auth0ClientId,
  navigate,
  children,
}) => {
  // Holds the initial entry point URL to the page
  const callbackDomain =
    typeof window !== 'undefined'
      ? `${window.location.protocol}//${window.location.host}`
      : 'http://localhost:3000'

  const auth0Client = new Auth0.WebAuth({
    audience: `https://${auth0Domain}/api/v2/`,
    clientID: auth0ClientId,
    domain: auth0Domain,
    redirectUri: `${callbackDomain}/auth_callback`,
    responseType: 'token id_token',
    scope: 'openid profile email',
  })

  // Reducer for containing the authentication state
  const [state, dispatch] = useImmerReducer<
    AuthState,
    AuthAction
  >(authReducer, {
    authResult: null,
    expiresOn: null,
    user: null,
  })

  const [contextValue, setContextValue] = React.useState<
    AuthContext
  >({
    auth0Client,
    callbackDomain,
    dispatch,
    navigate,
    state,
  })

  useEffect(() => {
    setContextValue({ ...contextValue, state })
  }, [state])

  useEffect(() => {
    auth0Client.checkSession({}, (error, authResult) => {
      if (error) {
        dispatch({
          error,
          errorType: 'checkSession',
          type: 'AUTH_ERROR',
        })
      } else {
        handleAuthResult({
          auth0Client,
          authResult,
          dispatch,
        })
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
