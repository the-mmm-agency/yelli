import React, { PropsWithChildren } from 'react'

import Drawer from './drawer'
import Header from './header'
import Content from './layout.css'
import Navigation from './navigation'
import PageTransition from './pageTransition'

import { PathnameProps } from 'src/types'

const Layout: React.FC<
  PropsWithChildren<PathnameProps>
> = ({ children, pathname }) => (
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
