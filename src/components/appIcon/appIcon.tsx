import { graphql } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-image'
import React, { memo } from 'react'

import Icon from './appIcon.css'

import { Image } from 'src/graphql-types'

interface Props
  extends Omit<
    GatsbyImageProps,
    'alt' | 'fluid' | 'fixed'
  > {
  icon: Image
}

const AppIcon: React.FC<Props> = ({ icon, ...rest }) => (
  <Icon alt="Application Icon" image={icon} {...rest} />
)

export const query = graphql`
  fragment AppIcon on Yelli_File {
    fluid(maxWidth: 200) {
      ...Fluid
    }
  }
`

export default memo(AppIcon)
