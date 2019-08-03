const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Yelli`,
    description: `The hottest progressive web app directory on the market`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src', 'components'),
        images: path.join(__dirname, 'src', 'images'),
        pages: path.join(__dirname, 'src', 'pages'),
        styles: path.join(__dirname, 'src', 'styles'),
        templates: path.join(__dirname, 'src', 'templates'),
        themes: path.join(__dirname, 'src', 'themes'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yelli`,
        short_name: `Yelli`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff5370`,
        display: `fullscreen`,
        icon: `src/images/yelli-logo.png`, // This path is relative to the root of the site.
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
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToStylesProvider: `src/stylesProviderProps`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "graphcms",
        url:
          "https://api-useast.graphcms.com/v1/cjyqkhvjb2pd501ffbfokgbte/master",
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-plugin-offline`,
  ],
}
