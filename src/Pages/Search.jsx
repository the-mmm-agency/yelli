import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Grid,
  TextField
} from '@material-ui/core';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import React, { useState } from 'react';
import gql from 'graphql-tag';

import { setIcons } from 'Util/SetIcons';
import CenterProgress from 'Components/CenterProgress';

export default mount({
  '/': route({
    async getView() {
      return <Search />;
    }
  })
});

const SEARCH_APPS = gql`
  query searchApps($searchString: String) {
    apps(where: { name_contains: $searchString }) {
      id
      name
      icons
      category {
        name
      }
    }
  }
`;

const Search = () => {
  const [searchString, setSearchString] = useState('');
  const { data, loading } = useQuery(SEARCH_APPS, {
    variables: {
      searchString
    }
  });

  if (loading) {
    return (
      <Grid container direction="column">
        <TextField
          fullWidth
          label="Search"
          onChange={event => setSearchString(event.target.value)}
          placeholder="Enter Search"
          value={searchString}
        />
        <CenterProgress />
      </Grid>
    );
  }
  return (
    <Grid container direction="column">
      <TextField
        fullWidth
        label="Search"
        onChange={event => setSearchString(event.target.value)}
        placeholder="Enter Search"
        value={searchString}
      />
      {data && (
        <List>
          {data.apps.map(app => (
            <ListItem key={app.id}>
              <ListItemIcon>
                <img
                  alt={app.name}
                  srcSet={setIcons(app.icons)}
                  style={{ width: 30, height: 30 }}
                />
              </ListItemIcon>
              <ListItemText primary={app.name} secondary={app.category.name} />
            </ListItem>
          ))}
        </List>
      )}
    </Grid>
  );
};
