import Img from 'gatsby-image'

import styled from 'src/util/styled'
import { radii } from 'src/util/theme'

const Icon = styled(Img).attrs({
  alt: 'Application Icon',
})`
  img {
    ${radii('heavy')};
  }
`

export default Icon
