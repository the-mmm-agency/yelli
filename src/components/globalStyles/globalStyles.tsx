import { Global } from '@emotion/core'
import React from 'react'

import globalStyles from 'src/styles/global.css'
import overrides from 'src/styles/overrides.css'
import scrollbars from 'src/styles/scrollbars.css'
import { ThemeProp } from 'src/types'

const GlobalStyles: React.FC<ThemeProp> = ({ theme }) => (
  <>
    <Global styles={globalStyles(theme)} />
    <Global styles={overrides(theme)} />
    <Global styles={scrollbars(theme)} />
  </>
)

export default GlobalStyles
