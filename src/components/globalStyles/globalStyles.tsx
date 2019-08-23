import { Global } from '@emotion/core'
import React from 'react'
import globalStyles from 'styles/global.css'
import overrides from 'styles/overrides.css'
import scrollbars from 'styles/scrollbars.css'
import { ThemeProp } from 'types'

const GlobalStyles: React.FC<ThemeProp> = ({ theme }) => (
  <>
    <Global styles={globalStyles(theme)} />
    <Global styles={overrides(theme)} />
    <Global styles={scrollbars(theme)} />
  </>
)

export default GlobalStyles
