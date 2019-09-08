const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Yelli',
    description:
      'The hottest progressive web app directory on the market',
    author: '@brettm12345',
  },
  plugins: [
    // Code Transformation
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-fastclick',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
      },
    },

    // Code Generation
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Yelli',
        short_name: 'Yelli',
        start_url: '/',
        background_color: '#212337',
        display: 'standalone',
        icon: 'src/images/yelli-logo.png',
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
        defaultQuality: 80,
        stripMetadata: true,
        useMozJpeg: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
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
        url: 'https://api.graph.cool/simple/v1/yelli',
      },
    },
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'GraphCool_File',
        imagePath: 'url',
        ext: '.png',
      },
    },

    // Transformers
    'gatsby-transformer-sharp',

    // Build/Hosting
    'gatsby-plugin-playground',
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
