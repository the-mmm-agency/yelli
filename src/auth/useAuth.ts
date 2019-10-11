import { useApolloClient } from '@apollo/react-hooks'
import { navigate } from 'gatsby'
import React from 'react'

import { AuthContext } from './authProvider'
import { AuthState } from './authReducer'
import { handleAuthResult } from './handleAuthResult'

import { useSnackbar } from 'src/hooks/useSnackbar'
import isBrowser from 'src/util/isBrowser'

export interface UseAuth
  extends Pick<AuthState, 'authResult'> {
  login: () => void
  logout: () => void
  handleAuth: () => void
  isAuthenticated: () => boolean
}

export const useAuth = (): UseAuth => {
  const {
    state,
    dispatch,
    auth0Client,
    callbackDomain,
  } = React.useContext(AuthContext)
  const apolloClient = useApolloClient()
  const { enqueue } = useSnackbar()

  const login = (): void => {
    auth0Client.authorize()
  }
  const logout = (): void => {
    auth0Client.logout({ returnTo: callbackDomain })
    dispatch({ type: 'LOGOUT_USER' })
    navigate('/')
  }

  const handleAuth = (): void => {
    if (isBrowser())
      auth0Client.parseHash(async (error, authResult) => {
        if (
          (await handleAuthResult({
            apolloClient,
            authResult,
            dispatch,
            error,
          })) &&
          authResult &&
          authResult !== null
        ) {
          navigate('/')
          enqueue('Login success', {
            variant: 'success',
          })
        }
      })
  }

  const isAuthenticated = (): boolean =>
    isBrowser() && !!window.localStorage.getItem('token')

  return {
    authResult: state.authResult,
    handleAuth,
    isAuthenticated,
    login,
    logout,
  }
}
