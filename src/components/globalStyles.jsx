import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'

import globalStyles from 'styles/global.css'
import overrides from 'styles/overrides.css'
import scrollbars from 'styles/scrollbars.css'

const GlobalStyles = ({ theme }) => (
  <>
    <Global styles={globalStyles(theme)} />
    <Global styles={overrides(theme)} />
    <Global styles={scrollbars(theme)} />
  </>
)

GlobalStyles.propTypes = {
  theme: PropTypes.object.isRequired,
}

export default GlobalStyles
