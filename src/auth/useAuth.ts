import { useMutation } from '@apollo/react-hooks'
import { navigate } from 'gatsby'
import { useContext } from 'react'

import { AuthContext } from './authProvider'
import { AuthState } from './authReducer'

import { AUTH } from 'src/graphql/mutations'
import { useSnackbar } from 'src/hooks/useSnackbar'
import isBrowser from 'src/util/isBrowser'

export interface UseAuth
  extends Pick<
    AuthState,
    'authResult' | 'isAuthenticating' | 'expiresAt'
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
  } = useContext(AuthContext)

  const { enqueue } = useSnackbar()

  const [auth] = useMutation(AUTH, {
    onError: error => {
      dispatch({
        auth0,
        enqueue,
        error,
        errorType: 'handleAuth',
        type: 'AUTH_ERROR',
      })
    },
  })

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
        if (error || !authResult || !authResult.idToken) {
          dispatch({
            auth0,
            enqueue,
            error: error || new Error('No token'),
            errorType: 'handleAuth',
            type: 'AUTH_ERROR',
          })
        } else {
          auth({
            variables: { idToken: authResult.idToken },
          })
          dispatch({
            authResult,
            type: 'LOGIN_USER',
          })
        }
        navigate('/')
      })
    }
  }

  const isAuthenticated = (): boolean =>
    !!(
      state.expiresAt &&
      new Date().getTime() < state.expiresAt
    )

  return {
    authResult: state.authResult,
    expiresAt: state.expiresAt,
    handleAuth,
    isAuthenticated,
    isAuthenticating: state.isAuthenticating,
    login,
    logout,
  }
}
