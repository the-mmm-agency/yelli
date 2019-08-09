import React from 'react'
import { Global } from '@emotion/core'

import globalStyles from 'styles/global.css'
import overrides from 'styles/overrides.css'
import fonts from 'styles/fonts.css'
import scrollbars from 'styles/scrollbars.css'

const GlobalStyles = props => (
  <>
    <Global styles={fonts} />
    <Global styles={globalStyles(props)} />
    <Global styles={overrides(props)} />
    <Global styles={scrollbars(props)} />
  </>
)

export default GlobalStyles
