import React from 'react'
import PropTypes from 'prop-types'
import posed, { PoseGroup } from 'react-pose'
import styled from '@emotion/styled'

import Layout from './src/components/layout'
import rootWrapper from './rootWrapper'

export const wrapRootElement = rootWrapper

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
    y: 10,
    transition: {
      duration: 225,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
})

const Transition = styled(TransitionPose)`
  overflow: hidden;
`

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

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const scroll = (position = { top: 0, left: 0, behavior: 'smooth' }) => {
    window.setTimeout(() => window.scrollTo(position), 400)
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
