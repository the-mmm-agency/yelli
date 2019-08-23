import { Link as GatsbyLink } from 'gatsby'

import { system } from 'util/system'

import styled from 'util/styled'

const Link = styled(GatsbyLink)`
  &:hover,
  &:focus {
    text-decoration: none;
  }
  color: inherit;
  text-decoration: none;
  ${system}
`

export default Link
