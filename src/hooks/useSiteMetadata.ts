import { graphql, useStaticQuery } from 'gatsby'

type SiteMetadata = {
  author: string
  description: string
  title: string
}

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return data.site.siteMetadata
}
