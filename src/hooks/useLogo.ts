import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import { ImageFluid } from 'src/graphql-types'

export const useLogo = (): FluidObject => {
  const data: {
    file: ImageFluid
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "yelli-logo.png" }) {
        childImageSharp {
          fluid(maxHeight: 56, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return data.file.childImageSharp.fluid
}
