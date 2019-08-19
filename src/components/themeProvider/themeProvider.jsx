import { Global } from '@emotion/core'
import {
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import GlobalStyles from 'components/globalStyles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { mergeDeepRight } from 'ramda'
import React, { memo } from 'react'
import fonts from 'styles/fonts.css'
import noflash from 'styles/noflash.css'
import base from 'themes/base'
import dark from 'themes/dark'
import light from 'themes/light'
import useDarkMode from 'use-dark-mode'

const createTheme = theme =>
  createMuiTheme(mergeDeepRight(base, theme))

const darkTheme = createTheme(dark)
const lightTheme = createTheme(light)

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode()
  const theme = darkMode.value ? darkTheme : lightTheme
  return (
    <>
      <Global styles={noflash(darkTheme)} />
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
