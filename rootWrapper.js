import React from 'react'

import GlobalStyles from './src/components/globalStyles.jsx'
import { ThemeProvider } from './src/components/themeProvider'
import useScrollContext from './src/components/scrollProvider'

const rootWrapper = ({ element }) => (
  <useScrollContext.Provider>
    <ThemeProvider>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </useScrollContext.Provider>
)

export default rootWrapper
