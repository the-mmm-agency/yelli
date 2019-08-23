import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Img from './logo.css'

const Logo = ({ ...props }) => {
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
  `)

  return (
    <Img
      fadeIn={false}
      fluid={logo.childImageSharp.fluid}
      loading="eager"
      {...props}
    />
  )
}

export default Logo
