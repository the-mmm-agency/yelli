import React from 'react'

import Favorites from './userMenu.favorites'
import Login from './userMenu.login'
import Logout from './userMenu.logout'
import SubmitApp from './userMenu.submitApp'

import { useAuth } from 'src/auth'

const Items: React.FC = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated() ? (
    <>
      <Favorites />
      <SubmitApp />
      <Logout />
    </>
  ) : (
    <Login />
  )
}

export default Items
