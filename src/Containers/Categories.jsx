import { List, ListItemIcon, ListItem, ListItemText } from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import CategoryIcon from 'Components/CategoryIcon';
import StyledLink from 'Components/StyledLink';

const GET_CATEGORIES = gql`
  {
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
    <List>
      {data.categories.map(category => {
        return (
          <StyledLink key={category.id} to={`/category/${category.name}`}>
            <ListItem button>
              <ListItemIcon>
                <CategoryIcon name={category.name} />
              </ListItemIcon>
              <ListItemText primary={category.name} />
            </ListItem>
          </StyledLink>
        );
      })}
    </List>
  );
};

export default Categories;
