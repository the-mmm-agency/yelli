import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-fetch'

import isBrowser from 'src/util/isBrowser'

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = window.localStorage.getItem('token')
  // return the headers to the context so httpLink can read them
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
        createUploadLink({
          fetch,
          uri: process.env.API_URL,
        })
      ),
    })
  : ({} as ApolloClient<any>)

export default client
