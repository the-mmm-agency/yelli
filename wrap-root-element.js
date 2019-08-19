import React from 'react'

import ThemeProvider from './src/components/themeProvider'

export default ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
