import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { theme } from 'styled-tools'

import Header from 'components/header'
import Navigation from 'components/navigation'
import SideDrawer from 'components/sideDrawer'
import Transition from 'components/transition'
import { up, down } from 'util/theme'

const Content = styled.main`
  display: flex;
  margin-top: 64px;
  flex-direction: column;
  flex: 1 1 100%;
  max-width: 100vw;
  ${down('sm')} {
    @media all and (display-mode: standalone) {
      padding-bottom: 64px;
    }
    padding-bottom: 100px;
  }
  ${up('md')} {
    max-width: calc(100vw - ${theme('sizes.sideDrawer')});
    margin-left: ${theme('sizes.sideDrawer')};
  }
`

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
