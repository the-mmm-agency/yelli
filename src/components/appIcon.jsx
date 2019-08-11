import Img from 'graphcms-image'
import styled from '@emotion/styled'

const Icon = styled(Img)`
  img {
    border-radius: 15px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
  }
`

Icon.defaultProps = {
  alt: 'Application Icon',
  maxWidth: 200,
  fadeIn: false,
  withWebp: true,
}

export default Icon
