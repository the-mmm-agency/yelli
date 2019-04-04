import { List } from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppListItem from 'Containers/AppListItem';

const SEARCH_APPS = gql`
  query searchApps($searchString: String) {
    apps(first: 10, where: { name_contains: $searchString }) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const SearchList = memo(({ searchString }) => {
  const { data, loading } = useQuery(SEARCH_APPS, {
    variables: {
      searchString
    }
  });
  if (loading) {
    return (
      <List>
        {[...new Array(10).keys()].map(key => (
          <AppListItem key={key} loading />
        ))}
      </List>
    );
  }
  return (
    <List>
      {data.apps.map(app => (
        <AppListItem
          key={app.id}
          category={app.category}
          icon={app.icon}
          id={app.id}
          name={app.name}
        />
      ))}
    </List>
  );
});

SearchList.propTypes = {
  searchString: PropTypes.string
};

export default SearchList;
