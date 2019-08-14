import React from 'react'

import Layout from './src/components/layout'
import rootWrapper from './rootWrapper'

export const wrapRootElement = rootWrapper

export const replaceComponentRenderer = ({ props }) => {
  const { component } = props.pageResources
  return (
    <Layout pathname={props.location.pathname}>
      {React.createElement(component, props)}
    </Layout>
  )
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const scroll = (position = { top: 0, left: 0, behavior: 'auto' }) => {
    window.setTimeout(() => window.scrollTo(position), 200)
  }
  if (location.action === 'PUSH') {
    scroll()
  } else {
    const savedPosition = getSavedScrollPosition(location)
    if (savedPosition) {
      scroll({
        top: savedPosition[1],
        left: savedPosition[0],
        behavior: 'smooth',
      })
    } else {
      scroll()
    }
  }
  return false
}
