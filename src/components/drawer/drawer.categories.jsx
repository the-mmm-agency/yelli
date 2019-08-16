import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
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
      {categories.map(category => (
        <DrawerLink
          key={category.id}
          to={`/category/${category.slug}`}
        >
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
        </DrawerLink>
      ))}
    </List>
  )
}

export default Categories
