import { radii } from 'util/theme'

import Img from 'graphcms-image'
import styled from 'util/styled'

const Icon = styled(Img)`
  img {
    ${radii('image')};
  }
`

export default Icon
