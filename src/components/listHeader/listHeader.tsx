import { TypographyProps } from '@material-ui/core/Typography'
import React from 'react'

import Base from './listHeader.css'

const ListHeader: React.FC<TypographyProps> = ({
  component = 'h1',
  variant = 'h5',
  ...rest
}) => (
  <Base component={component} variant={variant} {...rest} />
)

export default ListHeader
