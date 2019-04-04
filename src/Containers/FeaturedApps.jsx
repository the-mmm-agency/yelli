import { useQuery } from 'react-apollo-hooks';
import React, { memo } from 'react';
import gql from 'graphql-tag';

import FeaturedAppCard from 'Containers/FeaturedAppCard';
import SwipableAppList from 'Components/SwipableAppList';

const FEATURED_APPS = gql`
  query featured {
    apps(where: { featured: true }) {
      id
      name
      description
      banner
    }
  }
`;

const FeaturedApps = memo(() => {
  const { data, loading } = useQuery(FEATURED_APPS);
  return (
    <SwipableAppList
      AppComponent={FeaturedAppCard}
      apps={data.apps}
      loading={loading}
    />
  );
});

export default FeaturedApps;
