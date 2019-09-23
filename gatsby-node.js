const path = require('path')

exports.createPages = async ({
  actions: { createPage },
  graphql,
}) => {
  const generatePages = async (type, base, query = '') => {
    const request = await graphql(`
      {
        yelli {
          ${type} {
           id
           slug
           ${query}
          }
        }
      }
    `)

    request.data.yelli[type].forEach(
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

  await generatePages('applications', 'app')
  await generatePages('categories', 'category', 'name')
}
