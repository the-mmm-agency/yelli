import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Img from './logo.css'

const Logo = ({ ...props }) => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "yelli-logo.png" }) {
        childImageSharp {
          fixed(height: 64, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={logo.childImageSharp.fixed}
      fadeIn={false}
      loading="eager"
      {...props}
    />
  )
}

export default Logo
