const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const createPages = async (type, template, base, query = '') => {
    const request = await graphql(`
      {
        graphcms {
          ${type} {
           id
           slug
           ${query}
          }
        }
      }
    `)
    request.data.graphcms[type].forEach(({ id, slug, ...rest }) => {
      createPage({
        component: path.resolve(`./src/templates/${template}`),
        path: `${base}/${slug}`,
        context: {
          id,
          slug,
          ...rest,
        },
      })
    })
  }

  await createPages('applications', 'application.jsx', 'app')
  await createPages('categories', 'category.jsx', 'category', 'name')
}
