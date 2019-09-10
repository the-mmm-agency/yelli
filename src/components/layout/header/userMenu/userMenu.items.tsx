import React, { memo } from 'react'

import Favorites from './userMenu.favorites'
import Login from './userMenu.login'
import Logout from './userMenu.logout'
import SubmitApp from './userMenu.submitApp'

type ItemsProps = {
  isAuthenticated: boolean
}

const Items: React.FC<ItemsProps> = ({ isAuthenticated }) =>
  isAuthenticated ? (
    <>
      <Favorites />
      <SubmitApp />
      <Logout />
    </>
  ) : (
    <Login />
  )

export default memo(Items)
