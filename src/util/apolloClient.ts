import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { ErrorResponse, onError } from 'apollo-link-error'
import { ServerError } from 'apollo-link-http-common'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-fetch'

import isBrowser from 'src/util/isBrowser'

const errorLink = onError((errors: ErrorResponse) => {
  if (
    errors.networkError &&
    (errors.networkError as ServerError).statusCode === 401
  ) {
    window.localStorage.removeItem('token')
  }
})

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = isBrowser()
  ? new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(
        errorLink.concat(
          createUploadLink({
            fetch,
            uri: process.env.API_URL,
          })
        )
      ),
      ssrMode: false,
    })
  : ({} as ApolloClient<any>)

export default client
