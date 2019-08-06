import React, { forwardRef } from 'react'
import { Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

const Link = forwardRef((props, ref) => (
  <MuiLink component={GatsbyLink} ref={ref} {...props} />
))

Link.displayName = 'Link'

export default Link
