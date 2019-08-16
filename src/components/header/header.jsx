import { Hidden } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import DesktopHeader from './header.desktop'
import MobileHeader from './header.mobile'

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
