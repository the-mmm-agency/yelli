import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import useDarkMode from 'use-dark-mode'
import CssBaseline from '@material-ui/core/CssBaseline'

import BaseTheme from 'themes/baseTheme'
import GlobalStyles from 'components/globalStyles'
import DarkTheme from 'themes/darkTheme'
import LightTheme from 'themes/lightTheme'

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode()
  const createTheme = theme => createMuiTheme({ ...BaseTheme, ...theme })
  const computedTheme = createTheme(darkMode.value ? DarkTheme : LightTheme)
  return (
    <MuiThemeProvider theme={computedTheme}>
      <EmotionThemeProvider theme={computedTheme}>
        <GlobalStyles theme={computedTheme} />
        <CssBaseline />
        {children}
      </EmotionThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
