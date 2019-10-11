import Auth0 from 'auth0-js'
import React, {
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'

import {
  AuthAction,
  AuthState,
  authReducer,
} from './authReducer'

import isBrowser from 'src/util/isBrowser'

const domain = process.env.AUTH0_DOMAIN as string
const clientID = process.env.AUTH0_CLIENT_ID as string
export interface AuthContext {
  state: AuthState
  dispatch: Dispatch<AuthAction>
  auth0Client: Auth0.WebAuth
  callbackDomain: string
}

export const AuthContext = React.createContext<AuthContext>(
  {} as AuthContext
)

export const AuthProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const callbackDomain = isBrowser()
    ? `${window.location.protocol}//${window.location.host}`
    : 'http://localhost:3000'

  const auth0Client = new Auth0.WebAuth({
    audience: `https://${domain}/api/v2/`,
    clientID,
    domain,
    redirectUri: `${callbackDomain}/auth_callback`,
    responseType: 'token id_token',
    scope: 'openid profile email',
  })

  const [state, dispatch] = useReducer(authReducer, {
    authResult: null,
  })

  const [contextValue, setContextValue] = React.useState<
    AuthContext
  >({
    auth0Client,
    callbackDomain,
    dispatch,
    state,
  })

  useEffect(() => {
    setContextValue({ ...contextValue, state })
  }, [state])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
