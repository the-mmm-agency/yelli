import React from 'react'
import { navigate } from 'gatsby'
import { AuthProvider } from '@brettm12345/react-auth-hook'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './src/util/apolloClient'
import ThemeProvider from './src/components/themeProvider'

export default ({ element }) => (
  <ThemeProvider>
    <AuthProvider
      auth0ClientId={process.env.AUTH0_CLIENT_ID}
      auth0Domain={process.env.AUTH0_DOMAIN}
      navigate={navigate}
    >
      <ApolloProvider client={client}>
        {element}
      </ApolloProvider>
    </AuthProvider>
  </ThemeProvider>
)
