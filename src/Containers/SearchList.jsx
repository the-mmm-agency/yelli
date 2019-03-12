import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import CenterProgress from 'Components/CenterProgress';

const SEARCH_APPS = gql`
  query searchApps($searchString: String) {
    apps(first: 10, where: { name_contains: $searchString }) {
      ...AppCard
    }
  }
  ${APP_CARD}
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
  const history = useHistory();
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
        <ListItem
          key={app.id}
          button
          divider
          onClick={() => {
            history.push(`/app/${app.id}`);
          }}
        >
          <ListItemIcon>
            <img alt={app.name} className={classes.icon} src={app.icon} />
          </ListItemIcon>
          <ListItemText primary={app.name} secondary={app.category.name} />
        </ListItem>
      ))}
    </List>
  );
});

SearchList.propTypes = {
  searchString: PropTypes.string
};

export default SearchList;
