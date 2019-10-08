import LinkBase from 'src/elements/link'
import styled from 'src/util/styled'
import { palette } from 'src/util/theme'

export const Link = styled(LinkBase)<{
  selected?: boolean
}>(({ selected, ...props }) => ({
  color: palette(
    selected ? 'primary.main' : 'text.secondary'
  )(props),
}))
