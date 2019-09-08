import { GatsbyImageProps } from 'gatsby-image'
import React from 'react'

import Icon from './appIcon.css'

import { Image } from 'src/graphql-types'

type AppIconProps = Omit<
  GatsbyImageProps,
  'alt' | 'fadeIn' | 'fluid' | 'fixed'
> & {
  icon: Image
}

const AppIcon: React.FC<AppIconProps> = ({
  icon,
  ...rest
}) => (
  <Icon
    alt="Application Icon"
    fadeIn={false}
    fluid={{
      args: {
        maxWidth: 200,
      },
      image: icon,
    }}
    {...rest}
  />
)

export default AppIcon
