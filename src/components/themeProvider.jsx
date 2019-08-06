import React, { createContext, useEffect, useContext, useState } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import CssBaseline from '@material-ui/core/CssBaseline'

import useScrollContext from 'components/scrollProvider'
import BaseTheme from 'themes/baseTheme'
import DarkTheme from 'themes/darkTheme'
import LightTheme from 'themes/lightTheme'

const defaultContextData = {
  dark: false,
  toggle: () => {},
}

const DarkThemeContext = createContext(defaultContextData)
export const useDarkTheme = () => useContext(DarkThemeContext)

const useEffectDarkMode = () => {
  const matches = useMediaQuery('(prefers-color-scheme: dark)')
  const [themeState, setThemeState] = useState({
    dark: matches,
    hasThemeLoaded: false,
  })
  useEffect(() => {
    const isDark =
      typeof window !== 'undefined' &&
      window.localStorage.getItem('darkTheme') === 'true'
    setThemeState({ dark: isDark, hasThemeLoaded: true })
  }, [])
  return [themeState, setThemeState]
}

export const ThemeProvider = ({ element }) => {
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
    <useScrollContext.Provider>
      <MuiThemeProvider theme={computedTheme}>
        <DarkThemeContext.Provider
          value={{
            dark: themeState.dark,
            toggle,
          }}
        >
          <CssBaseline />
          {element}
        </DarkThemeContext.Provider>
      </MuiThemeProvider>
    </useScrollContext.Provider>
  )
}

ThemeProvider.propTypes = {
  element: PropTypes.element.isRequired,
}
