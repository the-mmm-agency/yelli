import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Img from './logo.css'
import { FluidObject } from 'gatsby-image'

const Logo: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "yelli-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 56, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `) as {
    logo: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }

  return (
    <Img
      fadeIn={false}
      fluid={logo.childImageSharp.fluid}
      loading="eager"
      className={className}
    />
  )
}

export default Logo
