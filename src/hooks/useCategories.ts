import { graphql, useStaticQuery } from 'gatsby'

import { Category } from 'src/graphql-types'

type Categories = Omit<Category, 'applications'>[]

export const useCategories = (): Categories => {
  const data: {
    yelli: {
      categories: Categories
    }
  } = useStaticQuery(
    graphql`
      query {
        yelli {
          categories {
            id
            name
            slug
          }
        }
      }
    `
  )
  return data.yelli.categories
}
