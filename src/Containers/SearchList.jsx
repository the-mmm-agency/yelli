import { List } from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import gql from 'graphql-tag';

import AppComponent from 'Containers/AppComponent';

const SEARCH_APPS = gql`
  query searchApps($searchString: String) {
    applications(first: 10, where: { name_contains: $searchString }) {
      id
    }
  }
`;

const SearchList = memo(({ searchString }) => {
  const { data, loading } = useQuery(SEARCH_APPS, {
    variables: {
      searchString
    }
  });
  return (
    <List>
      {loading || !data.applications
        ? [...new Array(10).keys()].map(key => (
            <AppComponent key={key} isLoading type="list" />
          ))
        : data.applications.map(app => (
            <AppComponent key={app.id} id={app.id} type="list" />
          ))}
    </List>
  );
});

SearchList.propTypes = {
  searchString: PropTypes.string
};

export default SearchList;
