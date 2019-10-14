import { Button } from '@material-ui/core'
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
import { handleAuthResult } from './handleAuthResult'

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

export const AuthContext = React.createContext<AuthContext>(
  {} as AuthContext
)

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

  const [state, dispatch] = useReducer(authReducer, {
    authResult: null,
    expiresAt: null,
    isAuthenticating: false,
  })

  const [contextValue, setContextValue] = React.useState<
    AuthContext
  >({
    auth0,
    callbackDomain,
    dispatch,
    state,
  })

  useEffect(() => {
    setContextValue({ ...contextValue, state })
  }, [state])

  useEffect(() => {
    if (isBrowser() && !state.isAuthenticating) {
      dispatch({ type: 'START_AUTHENTICATING' })
      auth0.checkSession({}, (err, authResult) => {
        if (err) {
          enqueue('Silent auth failed. Login required', {
            action: (
              <Button
                color="secondary"
                onClick={() => {
                  auth0.authorize({
                    scope: 'offline_access',
                  })
                }}
              >
                login
              </Button>
            ),
          })
        } else {
          handleAuthResult({
            authResult,
            dispatch,
          })
        }
        dispatch({ type: 'STOP_AUTHENTICATING' })
      })
    }
  }, [isBrowser()])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
