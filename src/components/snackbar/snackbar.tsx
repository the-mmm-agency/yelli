import { useMediaQuery } from '@material-ui/core'
import { pick } from 'ramda'
import React from 'react'

import SnackbarContent from './snackbar.content'
import { StyledSnackbar } from './snackbar.css'
import { Grow } from './snackbar.transitions'

import { useSnackbar } from 'src/hooks/useSnackbar'

const Snackbar: React.FC = () => {
  const { current, close, exit, isOpen } = useSnackbar()
  const contentProps = pick(['action', 'message'], current)
  const matches = useMediaQuery(theme =>
    theme.breakpoints.down('sm')
  )
  return (
    <StyledSnackbar
      {...current}
      anchorOrigin={{
        horizontal: matches ? 'center' : 'right',
        vertical: 'bottom',
      }}
      onClick={exit}
      onClose={close}
      onExit={exit}
      open={isOpen}
      TransitionComponent={Grow}
    >
      <SnackbarContent {...contentProps} />
    </StyledSnackbar>
  )
}

export default Snackbar
