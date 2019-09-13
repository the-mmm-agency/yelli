import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby'
import React, { forwardRef } from 'react'

import styled from 'src/util/styled'

const StyledLink = styled(GatsbyLink)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
  color: inherit;
  text-decoration: none;
`

const Link = forwardRef<
  HTMLAnchorElement,
  Omit<GatsbyLinkProps<{}>, 'innerRef' | 'ref'>
>((props, ref) => (
  <StyledLink innerRef={ref as Function} {...props} />
))

export default Link
