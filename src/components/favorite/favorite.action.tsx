import { Button } from '@material-ui/core'
import { navigate } from 'gatsby'
import React from 'react'

const FavoriteAction: React.ReactNode = (
  <Button
    color="secondary"
    onClick={(): void => {
      navigate('/favorites')
    }}
    role="link"
  >
    Show List
  </Button>
)

export default FavoriteAction
