import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-fetch'
import { oc } from 'ts-optchain'

import isBrowser from 'src/util/isBrowser'

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    // eslint-disable-next-line fp/no-loops
    for (const err of graphQLErrors) {
      switch (oc(err).extensions.code()) {
        case 'UNAUTHENTICATED':
          window.localStorage.removeItem('token')
      }
    }
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
      cache: new InMemoryCache({
        cacheRedirects: {
          Query: {
            me: (_parent, _args, { getCacheKey }) => ({
              favorites: getCacheKey({
                __typename: 'User',
              }),
              ...getCacheKey({ __typename: 'User' }),
            }),
          },
        },
      }),
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
