import { graphql } from 'gatsby'

export const query = graphql`
  fragment GraphCmsImg on GraphCMS_Asset {
    width
    height
    handle
  }
`
