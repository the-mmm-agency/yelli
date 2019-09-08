import { Global } from '@emotion/core'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import React, { memo } from 'react'
import useDarkMode from 'use-dark-mode'

import GlobalStyles from 'src/components/globalStyles'
import fonts from 'src/styles/fonts.css'
import noflash from 'src/styles/noflash.css'
import { darkTheme, lightTheme } from 'src/theme'
import { Children } from 'src/types'

const ThemeProvider: React.FC<Children> = ({
  children,
}) => {
  const darkMode = useDarkMode()
  const theme = darkMode.value ? darkTheme : lightTheme
  return (
    <>
      <Global styles={noflash} />
      <Global styles={fonts} />
      <GlobalStyles theme={theme} />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <EmotionThemeProvider theme={theme}>
          {children}
        </EmotionThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default memo(ThemeProvider)
