import React from 'react'

import Img from './logo.css'

import { useLogo } from 'src/hooks/useLogo'
import { ClassName } from 'src/types'

const Logo: React.FC<ClassName> = ({ className }) => {
  const logo = useLogo()
  return (
    <Img
      className={className}
      fadeIn={false}
      fluid={logo}
      loading="eager"
    />
  )
}

export default Logo
