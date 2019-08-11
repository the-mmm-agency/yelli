import {
  borders,
  flexbox,
  positions,
  palette,
  sizing,
  spacing,
} from '@material-ui/system'
import styled from '@emotion/styled'

const Flex = styled.div`
  display: flex;
  ${borders}
  ${flexbox}
  ${palette}
  ${positions}
  ${sizing}
  ${spacing}
`

export default Flex
