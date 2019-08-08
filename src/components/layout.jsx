import posed, { PoseGroup } from 'react-pose'
import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/header'
import Navigation from 'components/navigation'
import ScrollContainer from 'components/scrollContainer'
import SideDrawer from 'components/sideDrawer'

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      duration: 100,
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 50,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
})

const Layout = ({
  element,
  props: {
    location: { pathname },
  },
}) => (
  <>
    <Header pathname={pathname} />
    <SideDrawer />
    <PoseGroup>
      <RouteContainer key={pathname}>
        <div style={{ height: 65 }} />
        <ScrollContainer pathname={pathname}>{element}</ScrollContainer>
      </RouteContainer>
    </PoseGroup>
    <Navigation pathname={pathname} />
  </>
)

Layout.propTypes = {
  element: PropTypes.element.isRequired,
  props: PropTypes.object.isRequired,
}

export default Layout
