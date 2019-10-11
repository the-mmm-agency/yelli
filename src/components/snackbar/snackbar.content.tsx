import { SnackbarContentProps } from '@material-ui/core/SnackbarContent'
import React from 'react'

import { SnackbarContent } from './snackbar.content.css'

const Content: React.FC<SnackbarContentProps> = props => (
  <SnackbarContent elevation={4} {...props} />
)

export default Content
