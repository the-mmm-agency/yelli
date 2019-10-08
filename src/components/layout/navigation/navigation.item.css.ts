import { ifProp } from 'styled-tools'

import LinkBase from 'src/elements/link'
import styled from 'src/util/styled'
import { palette } from 'src/util/theme'

export const Link = styled(LinkBase)<{
  selected?: boolean
}>`
  color: ${ifProp(
    'selected',
    palette('primary.main'),
    palette('text.secondary')
  )};
`
