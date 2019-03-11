import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { mount, route } from 'navi';
import { useHistory } from 'react-navi';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';

import CategoryIcon from 'Components/CategoryIcon';
import CenterProgress from 'Components/CenterProgress';
import GET_CATEGORIES from 'Graphql/GetCategories.gql';

export default mount({
  '/': route({
    async getView() {
      return <Categories />;
    }
  })
});

const Categories = React.memo(() => {
  const history = useHistory();
  const { data, loading } = useQuery(GET_CATEGORIES);
  if (loading) {
    return <CenterProgress />;
  }

  return (
    <List>
      {data.categories.map(category => {
        return (
          <ListItem
            key={category.id}
            onClick={() => history.push(`/category/${category.name}`)}
          >
            <ListItemIcon style={{ color: 'inherit' }}>
              <CategoryIcon name={category.name} />
            </ListItemIcon>
            <ListItemText
              primary={category.name}
              primaryTypographyProps={{
                color: 'inherit'
              }}
            />
          </ListItem>
        );
      })}
    </List>
  );
});
