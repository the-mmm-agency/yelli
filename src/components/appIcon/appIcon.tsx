import { graphql } from 'gatsby'
import { memo } from 'react'

import AppIcon from './appIcon.css'

export const query = graphql`
  fragment AppIcon on Yelli_File {
    fixed(width: 50, height: 50) {
      ...Fixed
    }
    fluid(maxWidth: 200) {
      ...Fluid
    }
  }
`

export default memo(AppIcon)
