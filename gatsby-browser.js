import React from 'react'
import PropTypes from 'prop-types'

import Layout from './src/components/layout'
import { ThemeProvider } from './src/components/themeProvider'

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>

wrapPageElement.propTypes = {
  element: PropTypes.element.isRequired,
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider element={element} />
)

wrapRootElement.propTypes = {
  element: PropTypes.element.isRequired,
}
