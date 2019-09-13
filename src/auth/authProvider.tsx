import { useApolloClient } from '@apollo/react-hooks'
import Auth0 from 'auth0-js'
import React, { useEffect, useReducer } from 'react'

import {
  AuthAction,
  AuthState,
  authReducer,
} from './authReducer'
import { handleAuthResult } from './handleAuthResult'

import isBrowser from 'src/util/isBrowser'

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
  const callbackDomain = isBrowser()
    ? `${window.location.protocol}//${window.location.host}`
    : 'http://localhost:3000'
  const apolloClient = useApolloClient()
  const auth0Client = new Auth0.WebAuth({
    audience: `https://${auth0Domain}/api/v2/`,
    clientID: auth0ClientId,
    domain: auth0Domain,
    redirectUri: `${callbackDomain}/auth_callback`,
    responseType: 'token id_token',
    scope: 'openid profile email',
  })

  const [state, dispatch] = useReducer(authReducer, {
    authResult: null,
    expiresOn: null,
    isAuthenticating: false,
    user: null,
    userId: null,
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
          apolloClient,
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
