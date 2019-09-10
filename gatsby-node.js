const path = require('path')

const {
  createRemoteFileNode,
} = require('gatsby-source-filesystem')

exports.createResolvers = ({
  actions: { createNode },
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) =>
  createResolvers({
    GraphCool_File: {
      imageFile: {
        type: 'File',
        resolve: ({ url }) =>
          createRemoteFileNode({
            url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
            ext: '.png',
            name: 'image',
          }),
      },
    },
  })

exports.createPages = async ({
  actions: { createPage },
  graphql,
}) => {
  const generatePages = async (type, base, query = '') => {
    const request = await graphql(`
      {
        graphcool {
          ${type} {
           id
           slug
           ${query}
          }
        }
      }
    `)

    request.data.graphcool[type].forEach(
      ({ id, slug, ...rest }) => {
        createPage({
          component: path.resolve(
            `./src/templates/${base}.template.tsx`
          ),
          path: `${base}/${slug}`,
          context: {
            id,
            slug,
            ...rest,
          },
        })
      }
    )
  }

  await generatePages('allApplications', 'app')
  await generatePages('allCategories', 'category', 'name')
}

exports.onCreatePage = async ({
  page,
  actions: { createPage },
}) => {
  if (page.path.match(/^\/auth_callback/)) {
    page.matchPath = '/auth_callback'
    createPage(page)
  }
  if (page.path.match(/^\/profile/)) {
    page.matchPath = '/profile'
    createPage(page)
  }
  if (page.path.match(/^\/favorites/)) {
    page.matchPath = '/favorites'
    createPage(page)
  }
}
