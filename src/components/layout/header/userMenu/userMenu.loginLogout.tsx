import { useAuth } from '@brettm12345/react-auth-hook'
import { Login, Logout } from 'mdi-material-ui'
import React from 'react'

import UserMenuItem from './userMenu.item'

const LoginLogout: React.FC = () => {
  const { login, logout, isAuthenticated } = useAuth()
  return isAuthenticated() ? (
    <UserMenuItem
      icon={<Logout />}
      onClick={logout}
      text="Logout"
    />
  ) : (
    <UserMenuItem
      icon={<Login />}
      onClick={login}
      text="Login"
    />
  )
}

export default LoginLogout
