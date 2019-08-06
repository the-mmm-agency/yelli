import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { useTheme } from '@material-ui/styles'

const SEO = ({ description, lang, meta, title }) => {
  const theme = useTheme()
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
  )
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://yelli.com',
        },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, minimum-scale=1',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'theme-color',
          content: theme.palette.background.default,
        },
        {
          name: 'mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: title,
        },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'default',
        },
        {
          name: 'application-name',
          content: 'Yelli',
        },
        {
          name: 'msapplication-TileColor',
          content: theme.palette.background.default,
        },
        ...meta,
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
