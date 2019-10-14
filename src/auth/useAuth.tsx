import { useMutation } from '@apollo/react-hooks'
import { Button } from '@material-ui/core'
import { navigate } from 'gatsby'
import React from 'react'

import { AuthContext } from './authProvider'
import { AuthState } from './authReducer'
import { handleAuthResult } from './handleAuthResult'

import { AUTH } from 'src/graphql/mutations'
import { useSnackbar } from 'src/hooks/useSnackbar'
import isBrowser from 'src/util/isBrowser'

export interface UseAuth
  extends Pick<
    AuthState,
    'authResult' | 'isAuthenticating'
  > {
  login: () => void
  logout: () => void
  handleAuth: () => void
  isAuthenticated: () => boolean
}

export const useAuth = (): UseAuth => {
  const {
    state,
    dispatch,
    auth0,
    callbackDomain,
  } = React.useContext(AuthContext)
  const { enqueue } = useSnackbar()

  const [auth] = useMutation(AUTH)
  const login = (): void => {
    auth0.authorize()
  }
  const logout = (): void => {
    auth0.logout({ returnTo: callbackDomain })
    dispatch({ type: 'LOGOUT_USER' })
    navigate('/')
  }

  const handleAuth = (): void => {
    if (isBrowser() && !state.isAuthenticating) {
      dispatch({ type: 'START_AUTHENTICATING' })
      auth0.parseHash((error, authResult) => {
        const idToken = handleAuthResult({
          authResult,
          dispatch,
          error,
        })
        if (idToken)
          auth({
            variables: { idToken },
          })
        dispatch({ type: 'STOP_AUTHENTICATING' })
        navigate('/')
        enqueue(
          idToken ? 'Login success' : 'Login failure',
          {
            action: !idToken && (
              <Button color="secondary" onClick={login}>
                retry
              </Button>
            ),
          }
        )
      })
    }
  }

  const isAuthenticated = (): boolean =>
    isBrowser() && !!window.localStorage.getItem('token')

  return {
    authResult: state.authResult,
    handleAuth,
    isAuthenticated,
    isAuthenticating: state.isAuthenticating,
    login,
    logout,
  }
}
