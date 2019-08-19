import React from 'react'

import Layout from './src/components/layout'
import wrapRoot from './wrap-root-element'

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
  const scroll = (
    position = { behavior: 'auto', left: 0, top: 0 }
  ) => {
    window.setTimeout(() => window.scrollTo(position), 200)
  }
  if (location.action === 'PUSH') {
    scroll()
  } else {
    const savedPosition = getSavedScrollPosition(location)
    if (savedPosition) {
      scroll({
        behavior: 'auto',
        left: savedPosition[0],
        top: savedPosition[1],
      })
    } else {
      scroll()
    }
  }
  return false
}

export const wrapRootElement = wrapRoot
