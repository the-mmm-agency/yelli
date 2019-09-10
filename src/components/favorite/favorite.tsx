import { useAuth } from '@brettm12345/react-auth-hook'
import { IconButton, Tooltip } from '@material-ui/core'
import { StarBorder } from '@material-ui/icons'
import React, { useEffect } from 'react'

import { Star } from './favorite.css'

import { useBoolean } from 'src/hooks/useBoolean'
import { useFavorite } from 'src/hooks/useFavorite'

type FavoriteProps = {
  id: string
}

const Favorite: React.FC<FavoriteProps> = ({ id }) => {
  const { toggle, check, loading } = useFavorite()
  const {
    toggle: toggleFavorite,
    value: hasFavorite,
    setValue: setFavorite,
  } = useBoolean(false)

  const { isAuthenticated } = useAuth()

  useEffect((): void => {
    if (!loading) setFavorite(check(id))
  }, [loading])

  const handleClick = (): void => {
    toggle(id)
    toggleFavorite()
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
