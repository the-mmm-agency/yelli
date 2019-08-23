import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import Image from 'graphcms-image'
import { layout } from 'util/system'

const Img = styled(Image)(layout)

export const query = graphql`
  fragment GraphCmsImg on GraphCMS_Asset {
    width
    height
    handle
  }
`

export default Img
