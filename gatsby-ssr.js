import React from 'react'

import rootWrapper from './rootWrapper'
import Layout from './src/components/layout'

export const wrapRootElement = rootWrapper

export const wrapPageElement = ({ element, props }) => (
  <Layout pathname={props.location.pathname}>{element}</Layout>
)
