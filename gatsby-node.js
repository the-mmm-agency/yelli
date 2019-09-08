const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

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
