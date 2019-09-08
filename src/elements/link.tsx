import { Link as GatsbyLink } from 'gatsby'

import styled from 'src/util/styled'
import { system } from 'src/util/system'

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
