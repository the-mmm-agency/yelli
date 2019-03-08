import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import CategoryIcon from 'Components/CategoryIcon';
import NavLink from 'Components/NavLink';

const GET_CATEGORIES = gql`
  query categories {
    categories {
      name
      id
    }
  }
`;

const Categories = () => {
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
                color: 'inherit'
              }}
            />
          </NavLink>
        );
      })}
    </List>
  );
};

export default Categories;
