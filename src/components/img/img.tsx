import { graphql } from 'gatsby'
import GatsbyImage, {
  FixedObject,
  FluidObject,
  GatsbyImageProps,
} from 'gatsby-image'
import { has } from 'ramda'
import React from 'react'

import { Image as ImageProp } from 'src/graphql-types'

type ImageProps = Omit<
  GatsbyImageProps,
  'fluid' | 'fixed'
> & {
  image: ImageProp
}

const Image: React.FC<ImageProps> = ({
  image,
  ...rest
}) => {
  const {
    imageFile: { childImageSharp: imgSharp },
  } = image
  if (has('fluid', imgSharp)) {
    const { fluid } = imgSharp as { fluid: FluidObject }
    return <GatsbyImage fluid={fluid} {...rest} />
  }
  const { fixed } = imgSharp as { fixed: FixedObject }
  return <GatsbyImage fixed={fixed} {...rest} />
}

export const imageFixed = graphql`
  fragment ImageFixed on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`

export const imageFluid = graphql`
  fragment ImageFluid on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`

export const imageBase = graphql`
  fragment ImageBase on GraphCool_File {
    url
  }
`

export default Image
