import { graphql } from 'gatsby'
import Image, { GatsbyImageProps } from 'gatsby-image'
import React from 'react'

import {
  FixedArgs,
  FluidArgs,
  ImageProp,
  getFixed,
  getFluid,
} from './getImageProps'

type ImgProps = Omit<
  GatsbyImageProps,
  'fluid' | 'fixed'
> & {
  fluid?: ImageProp<FluidArgs>
  fixed?: ImageProp<FixedArgs>
}

const Img: React.FC<ImgProps> = ({
  fixed,
  fluid,
  ...rest
}) => (
  <Image
    fixed={fixed ? getFixed(fixed) : undefined}
    fluid={fluid ? getFluid(fluid) : undefined}
    {...rest}
  />
)

export const fluid = graphql`
  fragment Image on GraphCool_File {
    url
    width
    height
    aspectRatio
    base64
  }
`

export default Img
