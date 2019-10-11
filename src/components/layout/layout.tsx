import React, { PropsWithChildren } from 'react'

import Drawer from './drawer'
import Header from './header'
import Content from './layout.css'
import Navigation from './navigation'
import PageTransition from './pageTransition'

import Snackbar from 'src/components/snackbar'
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
    <Snackbar />
    <Navigation pathname={pathname} />
  </>
)

export default Layout
