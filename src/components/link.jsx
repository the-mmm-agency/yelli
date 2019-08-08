import React, { forwardRef } from 'react'
import { Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'

const Link = forwardRef((props, ref) => (
  <MuiLink
    color="inherit"
    component={GatsbyLink}
    ref={ref}
    {...props}
    underline="none"
  />
))

Link.displayName = 'Link'

export default Link
