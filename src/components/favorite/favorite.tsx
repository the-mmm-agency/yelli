import { Tooltip } from '@material-ui/core'
import { StarBorder } from '@material-ui/icons'
import React from 'react'

import { IconButton, Star } from './favorite.css'

import { useAuth } from 'src/auth'
import { useFavorite } from 'src/hooks/useFavorite'

type FavoriteProps = {
  id: string
  title: string
}

const Favorite: React.FC<FavoriteProps> = ({
  id,
  title,
}) => {
  const { isAuthenticated } = useAuth()
  const [hasFavorite, handleClick] = useFavorite(id, title)
  const label = `${
    hasFavorite ? 'Remove from' : 'Add to'
  } favorites`
  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        disabled={!isAuthenticated()}
        onClick={handleClick}
      >
        {hasFavorite ? <Star /> : <StarBorder />}
      </IconButton>
    </Tooltip>
  )
}

export default Favorite
