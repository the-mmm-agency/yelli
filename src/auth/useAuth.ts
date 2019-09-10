import { useApolloClient } from '@apollo/react-hooks'
import {
  Auth0DecodedHash,
  Auth0UserProfile,
} from 'auth0-js'
import gql from 'graphql-tag'
import React from 'react'

import { AuthContext } from './authProvider'
import { Maybe } from './authReducer'
import { handleAuthResult } from './handleAuthResult'

export interface UseAuth {
  login: () => void
  logout: () => void
  handleAuth: () => void
  isAuthenticated: () => boolean
  userId: Maybe<string>
  user: Maybe<Auth0UserProfile>
  authResult: Maybe<Auth0DecodedHash>
}

export const useAuth = (): UseAuth => {
  const {
    state,
    dispatch,
    auth0Client,
    callbackDomain,
    navigate,
  } = React.useContext(AuthContext)

  const apolloClient = useApolloClient()

  const login = (): void => {
    auth0Client.authorize()
  }

  const logout = (): void => {
    auth0Client.logout({ returnTo: callbackDomain })
    dispatch({ type: 'LOGOUT_USER' })
    navigate('/')
  }

  const handleAuth = (): void => {
    if (typeof window !== 'undefined') {
      auth0Client.parseHash(async (error, authResult) => {
        if (
          (await handleAuthResult({
            auth0Client,
            authResult,
            dispatch,
            error,
          })) &&
          authResult &&
          authResult !== null
        ) {
          const result = await apolloClient.mutate({
            mutation: gql`
              mutation authenticate($idToken: String!) {
                authenticateUser(idToken: $idToken) {
                  token
                }
              }
            `,
            variables: {
              idToken: authResult.idToken,
            },
          })
          window.localStorage.setItem(
            'token',
            result.data.authenticateUser.token
          )
          navigate('/')
        }
      })
    }
  }

  const isAuthenticated = (): boolean => {
    if (typeof window === 'undefined') return false
    return state.expiresOn
      ? new Date().getTime() < state.expiresOn
      : false
  }

  const userId = state.user !== null ? state.user.sub : null

  return {
    authResult: state.authResult,
    handleAuth,
    isAuthenticated,
    login,
    logout,
    user: state.user,
    userId,
  }
}
