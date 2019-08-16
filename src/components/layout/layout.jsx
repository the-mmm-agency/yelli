import Drawer from 'components/drawer'
import Header from 'components/header'
import Navigation from 'components/navigation'
import PageTransition from 'components/pageTransition'
import PropTypes from 'prop-types'
import React from 'react'

import Content from './layout.css'

const Layout = ({ children, pathname }) => (
  <>
    <Header pathname={pathname} />
    <Drawer />
    <PageTransition pathname={pathname}>
      <Content>{children}</Content>
    </PageTransition>
    <Navigation pathname={pathname} />
  </>
)

Layout.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Layout
