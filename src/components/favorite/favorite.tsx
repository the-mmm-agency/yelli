import { IconButton, Tooltip } from '@material-ui/core'
import { StarBorder } from '@material-ui/icons'
import React, { useEffect } from 'react'

import { Star } from './favorite.css'

import { useAuth } from 'src/auth'
import { useBoolean } from 'src/hooks/useBoolean'
import { useFavorite } from 'src/hooks/useFavorite'

type FavoriteProps = {
  id: string
}

const Favorite: React.FC<FavoriteProps> = ({ id }) => {
  const { toggle, check, loading } = useFavorite()
  const {
    value,
    toggle: toggleState,
    setValue,
  } = useBoolean(false)
  const { isAuthenticated } = useAuth()
  useEffect(() => {
    if (!loading) {
      setValue(check(id))
    }
  }, [loading])

  const handleClick = (): void => {
    toggleState()
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
        {value ? <Star /> : <StarBorder />}
      </IconButton>
    </Tooltip>
  )
}

export default Favorite
