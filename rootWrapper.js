import React from 'react'
import PropTypes from 'prop-types'

import ThemeProvider from './src/components/themeProvider'

const rootWrapper = ({ element }) => <ThemeProvider>{element}</ThemeProvider>

rootWrapper.propTypes = {
  element: PropTypes.element.isRequired,
}

export default rootWrapper
