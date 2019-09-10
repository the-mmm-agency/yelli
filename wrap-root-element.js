import React from 'react'
import { navigate } from 'gatsby'
import { ApolloProvider } from '@apollo/react-hooks'

import ThemeProvider from './src/components/themeProvider'
import client from './src/util/apolloClient'
import { AuthProvider } from './src/auth'

export default ({ element }) => (
  <ThemeProvider>
    <ApolloProvider client={client}>
      <AuthProvider
        auth0ClientId={process.env.AUTH0_CLIENT_ID}
        auth0Domain={process.env.AUTH0_DOMAIN}
        navigate={navigate}
      >
        {element}
      </AuthProvider>
    </ApolloProvider>
  </ThemeProvider>
)
