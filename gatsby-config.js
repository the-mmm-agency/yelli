require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteMetadata = require('./siteMetadata.json')

module.exports = {
  siteMetadata,
  plugins: [
    // Code Transformation
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-fastclick',
    'gatsby-plugin-root-import',

    // Code Generation
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: 'src/images/yelli-logo.png',
        appName: siteMetadata.title,
        appDescription: siteMetadata.description,
        start_url: '/',
        background_color: '#212337',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#ff5370',
        showSpinner: false,
      },
    },

    // Libraries
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        pngCompressionSpeed: 10,
        defaultQuality: 80,
        stripMetadata: true,
        useMozJpeg: false,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        pure: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-polished',
    'gatsby-plugin-use-dark-mode',

    // Sources
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCool',
        fieldName: 'graphcool',
        url: process.env.API_URL,
      },
    },

    // Transformers
    'gatsby-transformer-sharp',

    // Build/Hosting
    'gatsby-plugin-offline',
    'gatsby-plugin-preload-link-crossorigin',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          'Link: fonts/proxima-nova-regular.woff2; rel=preload; as=font; type=font/woff2',
          'Link: fonts/proxima-nova-medium.woff2; rel=preload; as=font; type=font/woff2',
          'Link: fonts/proxima-nova-semibold.woff2; rel=preload; as=font; type=font/woff2',
        ],
      },
    },
    'gatsby-plugin-netlify-cache',
  ],
}
