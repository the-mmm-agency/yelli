import React, { memo } from 'react'

import Favorites from './userMenu.favorites'
import Login from './userMenu.login'
import Logout from './userMenu.logout'

type ItemsProps = {
  isAuthenticated: boolean
}

const Items: React.FC<ItemsProps> = ({ isAuthenticated }) =>
  isAuthenticated ? (
    <>
      <Favorites />
      <Logout />
    </>
  ) : (
    <Login />
  )

export default memo(Items)
