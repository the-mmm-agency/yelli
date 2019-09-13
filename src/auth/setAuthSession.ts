import {
  Auth0DecodedHash,
  Auth0UserProfile,
} from 'auth0-js'

import { HandleAuthTokenOptions } from './handleAuthResult'

export interface SetAuthSessionOptions
  extends Omit<HandleAuthTokenOptions, 'apolloClient'> {
  authResult: Auth0DecodedHash
}

export const setAuthSession = async ({
  dispatch,
  auth0Client,
  authResult,
}: SetAuthSessionOptions): Promise<Auth0UserProfile> =>
  new Promise(
    (resolve: (user: Auth0UserProfile) => void, reject) => {
      if (authResult.accessToken) {
        auth0Client.client.userInfo(
          authResult.accessToken,
          (error, user) => {
            if (error) {
              dispatch({
                error,
                errorType: 'userInfo',
                type: 'AUTH_ERROR',
              })
              reject(error)
            } else {
              dispatch({
                authResult,
                type: 'LOGIN_USER',
                user,
              })
              resolve(user)
            }
          }
        )
      }
    }
  )
