import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import React, { memo } from 'react'
import useDarkMode from 'use-dark-mode'

import GlobalStyles from 'src/styles/global.css'
import NoFlash from 'src/styles/noflash.css'
import { darkTheme, lightTheme } from 'src/theme'
import { ThemeProvider as StyledThemeProvider } from 'src/util/styled'

interface Props {
  children?: React.ReactChild
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const darkMode = useDarkMode()
  const theme = darkMode.value ? darkTheme : lightTheme
  return (
    <>
      <GlobalStyles theme={theme} />
      <NoFlash />
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <StyledThemeProvider theme={theme}>
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default memo(ThemeProvider)
