import { graphql } from 'gatsby'
import GatsbyImage, { GatsbyImageProps } from 'gatsby-image'
import React from 'react'

interface Props
  extends Omit<GatsbyImageProps, 'fluid' | 'fixed'> {
  image:
    | Pick<GatsbyImageProps, 'fluid'>
    | Pick<GatsbyImageProps, 'fixed'>
}

const Image: React.FC<Props> = ({ image, ...rest }) => (
  <GatsbyImage {...image} {...rest} />
)

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

export default Image
