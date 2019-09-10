import ApolloClient from 'apollo-boost'
import { Operation } from 'apollo-link'
import fetch from 'isomorphic-fetch'

const isBrowser = typeof window !== 'undefined'

const client = isBrowser
  ? new ApolloClient({
    fetch,
    request: (operation: Operation) => {
      const token =
          window.localStorage.getItem('token') || ''
      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    },
    uri: process.env.API_URL,
  })
  : {}

export default client
