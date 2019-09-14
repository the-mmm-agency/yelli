import { graphql, useStaticQuery } from 'gatsby'

import { Category } from 'src/graphql-types'

type Categories = Omit<Category, 'applications'>[]

export const useCategories = (): Categories => {
  const data: {
    graphcool: {
      allCategories: Categories
    }
  } = useStaticQuery(
    graphql`
      query {
        graphcool {
          allCategories(orderBy: name_ASC) {
            id
            name
            slug
          }
        }
      }
    `
  )
  return data.graphcool.allCategories
}
