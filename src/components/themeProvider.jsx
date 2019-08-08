import React, {
  createContext,
  useLayoutEffect,
  useContext,
  useState,
} from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CssBaseline from '@material-ui/core/CssBaseline'

import BaseTheme from 'themes/baseTheme'
import DarkTheme from 'themes/darkTheme'
import LightTheme from 'themes/lightTheme'

const storage = {
  get: () => window.localStorage.getItem('darkTheme'),
  set: value => window.localStorage.setItem(value),
}

const defaultContextData = {
  dark: false,
  toggle: () => {},
}

const DarkThemeContext = createContext(defaultContextData)
export const useDarkTheme = () => useContext(DarkThemeContext)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: true,
    hasThemeLoaded: false,
  })
  const matches = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true })
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = storage.get() === null ? matches : storage.get() === 'true'
      setThemeState({ dark: isDark, hasThemeLoaded: true })
    }
  }, [])
  return [themeState, setThemeState]
}

export const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  if (!themeState.hasThemeLoaded) {
    return <div />
  }

  const toggle = () => {
    const dark = !themeState.dark
    window.localStorage.setItem('darkTheme', JSON.stringify(dark))
    setThemeState({ ...themeState, dark })
  }

  const createTheme = theme => createMuiTheme({ ...BaseTheme, ...theme })

  const computedTheme = createTheme(themeState.dark ? DarkTheme : LightTheme)

  return (
    <MuiThemeProvider theme={computedTheme}>
      <DarkThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        <CssBaseline />
        {children}
      </DarkThemeContext.Provider>
    </MuiThemeProvider>
  )
}
