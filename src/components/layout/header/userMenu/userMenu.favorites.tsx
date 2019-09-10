import { StarOutlined as Star } from '@material-ui/icons'
import { navigate } from 'gatsby'
import React from 'react'

import UserMenuItem from './userMenu.item'

const Favorites: React.FC = () => {
  const handleClick = (): void => {
    navigate('/favorites')
  }
  return (
    <UserMenuItem
      icon={<Star />}
      onClick={handleClick}
      text="Favorites"
    />
  )
}

export default Favorites
