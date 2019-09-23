import { graphql } from 'gatsby'

export const fluid = graphql`
  fragment Fixed on Yelli_Fixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

export const fixed = graphql`
  fragment Fluid on Yelli_Fluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
