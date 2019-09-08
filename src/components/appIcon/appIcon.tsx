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
}) => (
  <Icon
    alt="Application Icon"
    fluid={{
      args: {
        maxWidth: 200,
      },
      image: icon,
    }}
    {...rest}
  />
)

export default memo(AppIcon)
