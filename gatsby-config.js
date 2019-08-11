const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Yelli',
    description: 'The hottest progressive web app directory on the market',
    author: '@brettm12345',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src', 'components'),
        images: path.join(__dirname, 'src', 'images'),
        pages: path.join(__dirname, 'src', 'pages'),
        styles: path.join(__dirname, 'src', 'styles'),
        templates: path.join(__dirname, 'src', 'templates'),
        themes: path.join(__dirname, 'src', 'themes'),
        util: path.join(__dirname, 'src', 'util'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,
        svgo: false,
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#ff5370',
        showSpinner: false,
      },
    },
    'gatsby-plugin-fastclick',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GraphCMS',
        fieldName: 'graphcms',
        url:
          'https://api-useast.graphcms.com/v1/cjyqkhvjb2pd501ffbfokgbte/master',
      },
    },
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
