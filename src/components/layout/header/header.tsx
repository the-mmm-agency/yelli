import { Hidden } from '@material-ui/core'
import React from 'react'

import DesktopHeader from './header.desktop'
import MobileHeader from './header.mobile'

import { PathnameProps } from 'src/types'

const Header: React.FC<PathnameProps> = ({ pathname }) => (
  <>
    <Hidden mdUp>
      <MobileHeader pathname={pathname} />
    </Hidden>
    <Hidden smDown>
      <DesktopHeader />
    </Hidden>
  </>
)

export default Header
