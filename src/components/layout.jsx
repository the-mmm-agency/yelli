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
    delay: 300,
    beforeChildren: 300,
    transition: {
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'linear',
    },
  },
})

const Layout = ({
  element,
  props: {
    location: { pathname },
  },
}) => {
  return (
    <>
      <Header pathname={pathname} />
      <SideDrawer />
      <ScrollContainer pathname={pathname}>
        <PoseGroup>
          <RouteContainer key={pathname}>{element}</RouteContainer>
        </PoseGroup>
      </ScrollContainer>
      <Navigation pathname={pathname} />
    </>
  )
}

Layout.propTypes = {
  element: PropTypes.element.isRequired,
  props: PropTypes.object.isRequired,
}

export default Layout
