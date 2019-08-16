import { List, ListSubheader } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import DrawerLink from './drawer.link'

import CategoryIcon from 'components/categoryIcon'

const Categories = () => {
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
  `)

  return (
    <List
      subheader={<ListSubheader>Categories</ListSubheader>}
    >
      {categories.map(({ id, name, slug }) => (
        <DrawerLink
          key={id}
          to={`/category/${slug}`}
          Icon={() => <CategoryIcon name={name} />}
          text={name}
        />
      ))}
    </List>
  )
}

export default Categories
