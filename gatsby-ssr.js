import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from './src/components/themeProvider'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider element={element} />
)

wrapRootElement.propTypes = {
  element: PropTypes.element.isRequired,
}
