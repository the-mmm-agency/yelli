import { useQuery } from 'react-apollo-hooks';
import React, { memo } from 'react';

import FEATURED_APPS from 'Graphql/FeaturedAppsQuery.gql';
import FeaturedAppCard from 'Containers/FeaturedAppCard';
import SwipableAppList from 'Components/SwipableAppList';

const FeaturedApps = memo(() => {
  const { data, loading } = useQuery(FEATURED_APPS);
  if (loading) {
    return null;
  }
  return (
    <SwipableAppList
      AppComponent={FeaturedAppCard}
      apps={data.applications}
      length={10}
      loading={loading}
    />
  );
});

export default FeaturedApps;
