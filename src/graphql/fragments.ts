import gql from 'graphql-tag'

export const fluidFragment = gql`
  fragment Fixed on Fixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

export const fixedFragment = gql`
  fragment Fluid on Fluid {
    aspectRatio
    base64
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

export const appIconFragment = gql`
  fragment AppIcon on Image {
    fixed(width: 50, height: 50) {
      ...Fixed
    }
    fluid(maxWidth: 200) {
      ...Fluid
    }
  }
  ${fixedFragment}
  ${fluidFragment}
`

export const applicationFragment = gql`
  fragment Application on Application {
    id
    title
    slug
    category {
      name
    }
    icon {
      ...AppIcon
    }
  }
  ${appIconFragment}
`
