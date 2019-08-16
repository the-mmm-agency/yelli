import React from 'react'
import PropTypes from 'prop-types'

import Content from './layout.css'

import Header from 'components/header'
import Navigation from 'components/navigation'
import Drawer from 'components/drawer'
import PageTransition from 'components/pageTransition'

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
