import { useAuth } from '@brettm12345/react-auth-hook'
import { Logout as LogoutIcon } from 'mdi-material-ui'
import React from 'react'

import UserMenuItem from './userMenu.item'

const Logout: React.FC = () => {
  const { logout } = useAuth()
  return (
    <UserMenuItem
      icon={<LogoutIcon />}
      onClick={logout}
      text="logout"
    />
  )
}

export default Logout
