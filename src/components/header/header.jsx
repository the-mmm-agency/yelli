import React from 'react'
import PropTypes from 'prop-types'

import MobileHeader from './header.mobile'
import DesktopHeader from './header.desktop'

const Header = ({ pathname }) => (
  <>
    <MobileHeader pathname={pathname} />
    <DesktopHeader />
  </>
)

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default Header
