import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

import CategoryIcon from 'components/categoryIcon'
import NavLink from 'components/navLink'

const CategoryList = () => {
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
    <List subheader={<ListSubheader>Categories</ListSubheader>}>
      {categories.map(category => (
        <NavLink key={category.id} href={`/category/${category.slug}`}>
          <ListItemIcon style={{ color: 'inherit' }}>
            <CategoryIcon name={category.name} />
          </ListItemIcon>
          <ListItemText
            primary={category.name}
            primaryTypographyProps={{
              color: 'inherit',
              style: {
                fontWeight: 'inherit',
              },
            }}
          />
        </NavLink>
      ))}
    </List>
  )
}

export default CategoryList
