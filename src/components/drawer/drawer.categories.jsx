import { List, ListSubheader } from '@material-ui/core'
import CategoryIcon from 'components/categoryIcon'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import DrawerLink from './drawer.link'

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
          Icon={() => <CategoryIcon name={name} />}
          key={id}
          text={name}
          to={`/category/${slug}`}
        />
      ))}
    </List>
  )
}

export default Categories
