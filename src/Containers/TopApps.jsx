import { useQuery } from 'react-apollo-hooks';
import React, { memo } from 'react';
import gql from 'graphql-tag';

// eslint-disable-next-line import/no-named-as-default
import AppComponent from 'Containers/AppComponent';
import SwipableAppList from 'Components/SwipableAppList';

const TOP_APPS = gql`
  query topApps {
    applications(first: 10, orderBy: rank_DESC) {
      id
    }
  }
`;

const TopApps = memo(() => {
  const { data, loading } = useQuery(TOP_APPS);
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

export default TopApps;
