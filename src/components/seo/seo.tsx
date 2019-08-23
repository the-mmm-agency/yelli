import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet, HelmetProps } from 'react-helmet'

interface SeoProps {
  description?: string | null
  lang?: string
  meta?: HelmetProps['meta']
  title?: HelmetProps['title']
}

interface SiteQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
    }
  }
}

const SEO: React.FC<SeoProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery(
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
  ) as SiteQuery
  const metaDescription =
    description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          content: metaDescription,
          name: 'description',
        },
        {
          content: title,
          property: 'og:title',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: 'website',
          property: 'og:type',
        },
        {
          content: 'https://yelli.com',
          property: 'og:url',
        },
        {
          content: 'summary',
          name: 'twitter:card',
        },
        {
          content: site.siteMetadata.author,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
        {
          content: title,
          name: 'apple-mobile-web-app-title',
        },
        {
          content: title,
          name: 'application-name',
        },
        ...meta,
      ]}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  )
}

export default SEO
