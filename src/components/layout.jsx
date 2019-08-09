import React from 'react'
import styled from '@emotion/styled'

import Header from 'components/header'
import Navigation from 'components/navigation'
import SideDrawer from 'components/sideDrawer'
import { up, down } from 'util/theme'

const Content = styled.div`
  display: flex;
  margin-top: 64px;
  flex-direction: column;
  flex: 1 1 100%;
  max-width: 100vw;
  ${down('sm')} {
    padding-bottom: 64px;
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
    <Content>{children}</Content>
    <Navigation pathname={pathname} />
  </>
)

export default Layout
