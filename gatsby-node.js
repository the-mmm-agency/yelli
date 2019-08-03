const path = require("path")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    GraphCMS_Asset: {
      imageFile: {
        type: `File`,
        resolve(source) {
          return createRemoteFileNode({
            url: source.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const apps = await graphql(`
    {
      graphcms {
        applications {
          id
          slug
        }
      }
    }
  `)

  apps.data.graphcms.applications.forEach(({ id, slug }) => {
    createPage({
      component: path.resolve("./src/templates/application.jsx"),
      path: `/app/${slug}`,
      context: {
        id,
        slug,
      },
    })
  })

  const cats = await graphql(`
    {
      graphcms {
        categories {
          id
          slug
          name
        }
      }
    }
  `)
  cats.data.graphcms.categories.forEach(({ id, slug, name }) => {
    createPage({
      component: path.resolve("./src/templates/category.jsx"),
      path: `/category/${slug}`,
      context: {
        id,
        slug,
        name
      },
    })
  })
}
