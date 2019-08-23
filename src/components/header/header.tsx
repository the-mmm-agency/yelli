import { Hidden } from '@material-ui/core'
import React from 'react'

import DesktopHeader from './header.desktop'
import { PathnameProps } from 'types'
import MobileHeader from './header.mobile'

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
