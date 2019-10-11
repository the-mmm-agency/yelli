import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import ThemeProvider from './src/components/themeProvider'
import client from './src/util/apolloClient'
import { useSnackbar } from './src/hooks/useSnackbar'
import { AuthProvider } from './src/auth'

export default ({ element }) => (
  <ThemeProvider>
    <ApolloProvider client={client}>
      <AuthProvider>
        <useSnackbar.Provider>
          {element}
        </useSnackbar.Provider>
      </AuthProvider>
    </ApolloProvider>
  </ThemeProvider>
)
