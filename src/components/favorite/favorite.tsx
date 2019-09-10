import { useAuth } from '@brettm12345/react-auth-hook'
import { IconButton, Tooltip } from '@material-ui/core'
import { StarBorder } from '@material-ui/icons'
import React, { useMemo } from 'react'

import { Star } from './favorite.css'

import { useFavorite } from 'src/hooks/useFavorite'

type FavoriteProps = {
  id: string
}

const Favorite: React.FC<FavoriteProps> = ({ id }) => {
  const { toggle, check, loading } = useFavorite()
  const { isAuthenticated } = useAuth()
  const hasFavorite = useMemo(() => check(id), [loading])
  const handleClick = (): void => {
    toggle(id)
  }
  return (
    <Tooltip title="Add to favorites">
      <IconButton
        aria-label="Add to favorites"
        css={{
          marginTop: -10,
        }}
        disabled={!isAuthenticated()}
        onClick={handleClick}
      >
        {hasFavorite ? <Star /> : <StarBorder />}
      </IconButton>
    </Tooltip>
  )
}

export default Favorite
