import { graphql } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'
import React, { memo } from 'react'

import Icon from './appIcon.css'

import { Image } from 'src/graphql-types'

type AppIconProps = Omit<
  GatsbyImageProps,
  'alt' | 'fluid' | 'fixed'
> & {
  icon: Image
}

const AppIcon: React.FC<AppIconProps> = ({
  icon,
  ...rest
}) => <Icon alt="Application Icon" image={icon} {...rest} />

export const query = graphql`
  fragment AppIcon on GraphCool_File {
    ...ImageBase
    imageFile {
      childImageSharp {
        fluid(
          maxWidth: 200
          srcSetBreakpoints: [
            50
            70
            90
            110
            150
            180
            200
          ]
        ) {
          ...ImageFluid
        }
      }
    }
  }
`

export default memo(AppIcon)
