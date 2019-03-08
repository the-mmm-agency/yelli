import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';

import { setIcons } from 'Util/SetIcons';
import CenterProgress from 'Components/CenterProgress';
import StyledLink from 'Components/StyledLink';

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

const useStyles = makeStyles(theme => ({
  icon: {
    height: 40,
    width: 40
  },
  nested: {
    padding: theme.spacing(4)
  }
}));

const SearchList = React.memo(({ searchString }) => {
  const classes = useStyles();
  const { data, loading } = useQuery(SEARCH_APPS, {
    variables: {
      searchString
    }
  });
  if (loading) {
    return <CenterProgress />;
  }
  return (
    <List>
      {data.apps.map(app => (
        <StyledLink key={app.id} href={`/app/${app.id}`}>
          <ListItem button className={classes.nested} divider>
            <ListItemIcon>
              <img
                alt={app.name}
                className={classes.icon}
                srcSet={setIcons(app.icons)}
              />
            </ListItemIcon>
            <ListItemText primary={app.name} secondary={app.category.name} />
          </ListItem>
        </StyledLink>
      ))}
    </List>
  );
});

SearchList.propTypes = {
  searchString: PropTypes.string
};

export default SearchList;
