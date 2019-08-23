import { Global } from '@emotion/core'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import GlobalStyles from 'components/globalStyles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import React, { memo } from 'react'
import fonts from 'styles/fonts.css'
import noflash from 'styles/noflash.css'
import useDarkMode from 'use-dark-mode'
import { ChildrenProps } from 'types'
import { darkTheme, lightTheme } from 'theme'

const ThemeProvider: React.FC<ChildrenProps> = ({
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
