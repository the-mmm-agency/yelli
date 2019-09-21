import { graphql, useStaticQuery } from 'gatsby'

import { Category } from 'src/graphql-types'

type Categories = Omit<Category, 'applications'>[]

export const useCategories = (): Categories => {
  const data: {
    graphcool: {
      categories: Categories
    }
  } = useStaticQuery(
    graphql`
      query {
        graphcool {
          categories(orderBy: { name: { asc }}) {
            id
            name
            slug
          }
        }
      }
    `
  )
  return data.graphcool.categories
}
