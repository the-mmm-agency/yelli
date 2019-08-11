import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import Header from 'components/header'
import Navigation from 'components/navigation'
import SideDrawer from 'components/sideDrawer'
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
    max-width: calc(100vw - 240px);
    margin-left: 240px;
  }
`

const Layout = ({ children, pathname }) => (
  <>
    <Header pathname={pathname} />
    <SideDrawer />
    <Navigation pathname={pathname} />
    <Content>{children}</Content>
  </>
)

Layout.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Layout
