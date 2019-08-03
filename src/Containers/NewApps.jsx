import { useQuery } from 'react-apollo-hooks';
import React, { memo } from 'react';
import gql from 'graphql-tag';

// eslint-disable-next-line import/no-named-as-default
import AppComponent from 'Containers/AppComponent';
import SwipableAppList from 'Components/SwipableAppList';

const NEW_APPS = gql`
  query new {
    applications(first: 10, orderBy: createdAt_DESC) {
      id
    }
  }
`;

const NewApps = memo(() => {
  const { data, loading } = useQuery(NEW_APPS);
  if (loading) {
    return null;
  }
  return (
    <SwipableAppList
      AppComponent={AppComponent}
      apps={data.applications}
      length={10}
      loading={loading}
    />
  );
});

export default NewApps;
