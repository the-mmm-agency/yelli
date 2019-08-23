import { List, ListSubheader } from '@material-ui/core'
import CategoryIcon from 'components/categoryIcon'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import DrawerLink from './drawer.link'
import { Category } from 'graphql-types'

const Categories: React.FC = () => {
  const {
    graphcms: { categories },
  } = useStaticQuery(graphql`
    query {
      graphcms {
        categories {
          id
          name
          slug
        }
      }
    }
  `) as {
    graphcms: {
      categories: Pick<Category, 'id' | 'name' | 'slug'>[]
    }
  }

  return (
    <List
      subheader={<ListSubheader>Categories</ListSubheader>}
    >
      {categories.map(({ id, name, slug }) => (
        <DrawerLink
          icon={<CategoryIcon name={name} />}
          key={id}
          text={name}
          to={`/category/${slug}`}
        />
      ))}
    </List>
  )
}

export default Categories
