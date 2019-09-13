import { Logout as LogoutIcon } from 'mdi-material-ui'
import React from 'react'

import UserMenuItem from './userMenu.item'

import { useAuth } from 'src/auth'

const Logout: React.FC = () => {
  const { logout } = useAuth()
  return (
    <UserMenuItem
      icon={<LogoutIcon />}
      onClick={logout}
      text="Logout"
    />
  )
}

export default Logout
