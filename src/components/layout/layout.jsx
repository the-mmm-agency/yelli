import React from 'react'
import PropTypes from 'prop-types'

import Content from './layout.css'

import Header from 'components/header'
import Navigation from 'components/navigation'
import SideDrawer from 'components/sideDrawer'
import Transition from 'components/transition'

const Layout = ({ children, pathname }) => (
  <>
    <Header pathname={pathname} />
    <SideDrawer />
    <Transition pathname={pathname}>
      <Content>{children}</Content>
    </Transition>
    <Navigation pathname={pathname} />
  </>
)

Layout.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Layout
