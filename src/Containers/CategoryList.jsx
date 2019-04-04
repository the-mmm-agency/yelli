import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import React, { memo } from 'react';

import CategoryIcon from 'Components/CategoryIcon';
import GET_CATEGORIES from 'Graphql/GetCategories.gql';
import NavLink from 'Components/NavLink';

const CategoryList = memo(() => {
  const { data, loading } = useQuery(GET_CATEGORIES);
  if (loading) {
    return null;
  }
  return (
    <List subheader={<ListSubheader>Categories</ListSubheader>}>
      {data.categories.map(category => {
        return (
          <NavLink key={category.id} href={`/category/${category.name}`}>
            <ListItemIcon style={{ color: 'inherit' }}>
              <CategoryIcon name={category.name} />
            </ListItemIcon>
            <ListItemText
              primary={category.name}
              primaryTypographyProps={{
                color: 'inherit',
                style: {
                  fontWeight: 'inherit'
                }
              }}
            />
          </NavLink>
        );
      })}
    </List>
  );
});

export default CategoryList;
