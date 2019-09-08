import {
  List,
  ListSubheader as Subheader,
} from '@material-ui/core'
import React from 'react'

import DrawerLink from './drawer.link'

import CategoryIcon from 'src/components/categoryIcon'
import { useCategories } from 'src/hooks/useCategories'

const Categories: React.FC = () => {
  const categories = useCategories()
  return (
    <List subheader={<Subheader>Categories</Subheader>}>
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
