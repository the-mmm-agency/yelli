import { graphql } from 'gatsby'
import Image, { GatsbyImageProps } from 'gatsby-image'
import React, { useMemo } from 'react'

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
}) => {
  const fixedObj = useMemo(
    () => (fixed ? getFixed(fixed) : undefined),
    [fixed]
  )
  const fluidObj = useMemo(
    () => (fluid ? getFluid(fluid) : undefined),
    [fluid]
  )
  return (
    <Image fixed={fixedObj} fluid={fluidObj} {...rest} />
  )
}

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
