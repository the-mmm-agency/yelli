import { graphql, useStaticQuery } from 'gatsby'
import { FluidObject } from 'gatsby-image'

export const useLogo = (): FluidObject => {
  const data: {
    file: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
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
