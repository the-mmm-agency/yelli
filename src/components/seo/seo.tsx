import React from 'react'
import { Helmet, HelmetProps } from 'react-helmet'

import renderPreload, { Weight } from './seo.preloadFont'

import { useSiteMetadata } from 'src/hooks/useSiteMetadata'

type SeoProps = Partial<{
  description: string | null
  lang: string
  meta: HelmetProps['meta']
  title: HelmetProps['title']
}>

const SEO: React.FC<SeoProps> = ({
  description,
  lang = 'en',
  meta = [],
  title,
}) => {
  const preloadWeights: Weight[] = [
    'regular',
    'medium',
    'semibold',
  ]
  const siteMetadata = useSiteMetadata()
  const metaDescription =
    description || siteMetadata.description
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
          content: siteMetadata.author,
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
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      {preloadWeights.map(weight => renderPreload(weight))}
    </Helmet>
  )
}

export default SEO
