import React, { createContext, useContext, useState } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useEffectOnce } from 'react-use'

import BaseTheme from 'themes/baseTheme'
import GlobalStyles from 'components/globalStyles'
import DarkTheme from 'themes/darkTheme'
import LightTheme from 'themes/lightTheme'

const key = 'darkTheme'

const storage = {
  get: () => window.localStorage.getItem(key),
  set: value => window.localStorage.setItem(key, value),
}

const defaultContextData = {
  dark: false,
  toggle: () => {},
}

const ThemeContext = createContext(defaultContextData)
export const useDarkTheme = () => useContext(ThemeContext)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    loaded: false,
  })
  const matches = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true })
  useEffectOnce(() => {
    const isDark = storage.get() === null ? matches : storage.get() === 'true'
    setThemeState({ dark: isDark, loaded: true })
  })
  return [themeState, setThemeState]
}

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()
  const toggle = () => {
    const dark = !themeState.dark
    storage.set(JSON.stringify(dark))
    setThemeState({ ...themeState, dark })
  }
  if (!themeState.loaded) {
    return <div />
  }
  const createTheme = theme => createMuiTheme({ ...BaseTheme, ...theme })
  const computedTheme = createTheme(themeState.dark ? DarkTheme : LightTheme)
  return (
    <ThemeContext.Provider
      value={{
        dark: themeState.dark,
        toggle,
      }}
    >
      <EmotionThemeProvider theme={computedTheme}>
        <MuiThemeProvider theme={computedTheme}>
          <GlobalStyles theme={computedTheme} />
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}
