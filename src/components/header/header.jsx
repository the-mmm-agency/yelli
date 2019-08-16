import { Hidden } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

import MobileHeader from './header.mobile'
import DesktopHeader from './header.desktop'

const Header = ({ pathname }) => (
  <>
    <Hidden mdUp>
      <MobileHeader pathname={pathname} />
    </Hidden>
    <Hidden smDown>
      <DesktopHeader />
    </Hidden>
  </>
)

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Header
