import Drawer from 'components/drawer'
import Header from 'components/header'
import Navigation from 'components/navigation'
import PageTransition from 'components/pageTransition'
import React from 'react'
import { PathnameProps, WithChildren } from 'types'

import Content from './layout.css'

const Layout: React.FC<WithChildren<PathnameProps>> = ({
  children,
  pathname,
}) => (
  <>
    <Header pathname={pathname} />
    <Drawer />
    <PageTransition pathname={pathname}>
      <Content>{children}</Content>
    </PageTransition>
    <Navigation pathname={pathname} />
  </>
)

export default Layout
