const fs = require('fs')
const path = require('path')

const dirs = Object.values(
  fs.readdirSync('./src/').map(dir => {
    if (!fs.lstatSync(`./src/${dir}`).isDirectory()) return
    return {
      [dir]: path.join(__dirname, 'src', dir),
    }
  })
).reduce((r, c) => Object.assign(r, c), {})

module.exports = {
  siteMetadata: {
    title: 'Yelli',
    description:
      'The hottest progressive web app directory on the market',
    author: '@brettm12345',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: dirs,
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
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-polished',
    'gatsby-plugin-use-dark-mode',
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
