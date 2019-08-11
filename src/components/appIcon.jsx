import Img from 'graphcms-image'
import styled from '@emotion/styled'

const Icon = styled(Img)`
  img {
    border-radius: 15px;
  }
`

Icon.defaultProps = {
  alt: 'Application Icon',
  maxWidth: 200,
  fadeIn: false,
  withWebp: true,
}

export default Icon
