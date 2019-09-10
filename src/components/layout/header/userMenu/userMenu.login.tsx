import { Login as LoginIcon } from 'mdi-material-ui'
import React from 'react'

import UserMenuItem from './userMenu.item'

import { useAuth } from 'src/auth'

const Login: React.FC = () => {
  const { login } = useAuth()
  return (
    <UserMenuItem
      icon={<LoginIcon />}
      onClick={login}
      text="Login"
    />
  )
}

export default Login
