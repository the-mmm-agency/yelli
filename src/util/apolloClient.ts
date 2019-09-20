import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'isomorphic-fetch'

import isBrowser from 'src/util/isBrowser'

const client = isBrowser()
  ? new ApolloClient({
      cache: new InMemoryCache(),
      link: createUploadLink({
        fetch,
        headers: window.localStorage.getItem('token')
          ? {
              Authorization: `Bearer ${window.localStorage.getItem(
                'token'
              )}`,
            }
          : {},
        uri: process.env.API_URL,
      }),
    })
  : {}

export default client
