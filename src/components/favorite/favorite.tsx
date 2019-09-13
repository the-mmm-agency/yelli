import { IconButton, Tooltip } from '@material-ui/core'
import { StarBorder } from '@material-ui/icons'
import React from 'react'

import { Star } from './favorite.css'

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
  const [value, toggle] = useFavorite(id, title)
  const label = `${
    value ? 'Remove from' : 'Add to'
  } favorites`
  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        css={{
          marginTop: -10,
        }}
        disabled={!isAuthenticated()}
        onClick={toggle}
      >
        {value ? <Star /> : <StarBorder />}
      </IconButton>
    </Tooltip>
  )
}

export default Favorite
