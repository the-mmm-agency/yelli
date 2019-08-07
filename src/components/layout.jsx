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
    delay: 0,
  },
  exit: {
    opacity: 0,
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
