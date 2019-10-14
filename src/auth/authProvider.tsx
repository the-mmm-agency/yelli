import Auth0 from 'auth0-js'
import React, {
  Dispatch,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  AuthAction,
  AuthState,
  authReducer,
} from './authReducer'

import { useSnackbar } from 'src/hooks/useSnackbar'
import isBrowser from 'src/util/isBrowser'

const domain = process.env.AUTH0_DOMAIN as string
const clientID = process.env.AUTH0_CLIENT_ID as string
export interface AuthContext {
  state: AuthState
  dispatch: Dispatch<AuthAction>
  auth0: Auth0.WebAuth
  callbackDomain: string
}

const DEFAULT_STATE = {
  authResult: null,
  expiresAt: null,
  isAuthenticating: false,
}
export const AuthContext = createContext<AuthContext>({
  auth0: (null as unknown) as Auth0.WebAuth,
  callbackDomain: 'http://localhost:8000',
  dispatch: () => {},
  state: DEFAULT_STATE,
})

export const AuthProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const callbackDomain = isBrowser()
    ? `${window.location.protocol}//${window.location.host}`
    : 'http://localhost:3000'

  const auth0 = new Auth0.WebAuth({
    audience: `https://${domain}/api/v2/`,
    clientID,
    domain,
    leeway: 60,
    redirectUri: `${callbackDomain}/auth_callback`,
    responseType: 'token id_token',
    scope: 'openid profile email',
  })

  const { enqueue } = useSnackbar()

  const [state, dispatch] = useReducer(
    authReducer,
    DEFAULT_STATE
  )

  const [contextValue, setContextValue] = useState<
    AuthContext
  >({
    auth0,
    callbackDomain,
    dispatch,
    state,
  })

  useEffect(() => {
    setContextValue((contextValue: AuthContext) => ({
      ...contextValue,
      state,
    }))
  }, [state])

  useEffect(() => {
    if (
      isBrowser() &&
      !state.isAuthenticating &&
      !!window.localStorage.getItem('token')
    ) {
      dispatch({ type: 'START_AUTHENTICATING' })
      auth0.checkSession({}, (error, authResult) => {
        if (error) {
          dispatch({
            auth0,
            enqueue,
            error,
            errorType: 'checkSession',
            type: 'AUTH_ERROR',
          })
        } else {
          dispatch({
            authResult,
            type: 'LOGIN_USER',
          })
        }
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
