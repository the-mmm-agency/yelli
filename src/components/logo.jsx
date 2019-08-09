import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import { up, spacing } from 'util/theme'

const Img = styled(Image)`
  ${up('md')} {
    margin-left: ${spacing(4)};
  }
  height: 64;
  margin: auto;
`

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
