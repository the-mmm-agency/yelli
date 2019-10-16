import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-fetch'

import isBrowser from 'src/util/isBrowser'

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem('token')
  return token
    ? {
        headers: {
          ...headers,
          authorization: token,
        },
      }
    : headers
})

const uploadLink = createUploadLink({
  fetch,
  uri: process.env.API_URL,
})

const link = authLink.concat(uploadLink)

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      me: (_parent, _args, { getCacheKey }) => ({
        favorites: getCacheKey({
          __typename: 'Application',
        }),
        ...getCacheKey({ __typename: 'User' }),
      }),
    },
  },
})

const client = isBrowser()
  ? new ApolloClient({
      cache,
      link,
    })
  : ({} as ApolloClient<any>)

export default client
