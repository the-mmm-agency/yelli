import posed, { PoseGroup } from 'react-pose'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Header from 'components/header'
import Navigation from 'components/navigation'
import SideDrawer from 'components/sideDrawer'
import { up } from 'util/theme'

const RouteContainer = posed.div({
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

const Content = styled(RouteContainer)`
  display: flex;
  margin-top: 64px;
  flex-direction: column;
  flex: 1 1 100%;
  max-width: 100vw;
  ${up('md')} {
    max-width: calc(100vw - 240px);
  }
`

const Layout = ({
  element,
  props: {
    location: { pathname },
  },
}) => (
  <div css={{ display: 'flex' }}>
    <Header pathname={pathname} />
    <SideDrawer />
    <PoseGroup>
      <Content key={pathname}>{element}</Content>
    </PoseGroup>
    <Navigation pathname={pathname} />
  </div>
)

Layout.propTypes = {
  element: PropTypes.element.isRequired,
  props: PropTypes.object.isRequired,
}

export default Layout
