import Img from 'src/components/img'
import styled from 'src/util/styled'
import { radii } from 'src/util/theme'

const Icon = styled(Img)`
  img {
    ${radii('heavy')};
  }
`

export default Icon
