import Img from 'graphcms-image'
import styled from '@emotion/styled'

import { radii } from 'util/theme'

const Icon = styled(Img)`
  img {
    border-radius: ${radii('image')};
  }
`

export default Icon
