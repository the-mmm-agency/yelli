import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import useDarkMode from 'use-dark-mode'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Global } from '@emotion/core'

import BaseTheme from 'themes/baseTheme'
import noflash from 'styles/noflash.css'
import fonts from 'styles/fonts.css'
import GlobalStyles from 'components/globalStyles'
import DarkTheme from 'themes/darkTheme'
import LightTheme from 'themes/lightTheme'

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode()
  const createTheme = theme => createMuiTheme({ ...BaseTheme, ...theme })
  const darkTheme = createTheme(DarkTheme)
  const lightTheme = createTheme(LightTheme)
  const theme = darkMode.value ? darkTheme : lightTheme
  return (
    <>
      <Global styles={noflash(darkTheme)} />
      <Global styles={fonts} />
      <EmotionThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </EmotionThemeProvider>
    </>
  )
}

export default ThemeProvider
