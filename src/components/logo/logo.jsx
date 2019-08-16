import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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
      fluid={logo.childImageSharp.fluid}
      fadeIn={false}
      loading="eager"
      {...props}
    />
  )
}

export default Logo
