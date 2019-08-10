import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import styled from '@emotion/styled'

import Layout from './src/components/layout'
import rootWrapper from './rootWrapper'

const TransitionPose = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 300,
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 5,
    transition: {
      duration: 225,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
})

const Transition = styled(TransitionPose)`
  overflow: hidden;
`

const transitionDelay = 105

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay + 70
    )
  }
  return false
}

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources
  return (
    <Layout pathname={props.location.pathname}>
      <PoseGroup>
        <Transition key={props.location.key}>
          {React.createElement(component, props)}
        </Transition>
      </PoseGroup>
    </Layout>
  )
}

export const wrapRootElement = rootWrapper
