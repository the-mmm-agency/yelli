import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import {
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import useDarkMode from 'use-dark-mode'
import { Global } from '@emotion/core'
import { mergeDeepRight } from 'ramda'

import GlobalStyles from 'components/globalStyles'
import noflash from 'styles/noflash.css'
import fonts from 'styles/fonts.css'
import base from 'themes/base'
import dark from 'themes/dark'
import light from 'themes/light'

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode()
  const createTheme = theme =>
    createMuiTheme(mergeDeepRight(base, theme))
  const darkTheme = createTheme(dark)
  const lightTheme = createTheme(light)
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
