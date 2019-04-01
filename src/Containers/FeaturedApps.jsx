import { useQuery } from 'react-apollo-hooks';
import { Grid } from '@material-ui/core';
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
  if (loading) {
    return (
      <Grid
        alignItems="center"
        component="ul"
        container
        justify="center"
        wrap="nowrap"
      >
        {[...new Array(5).keys()].map(key => (
          <FeaturedAppCard key={key} loading />
        ))}
      </Grid>
    );
  }
  return <SwipableAppList AppComponent={FeaturedAppCard} apps={data.apps} />;
});

export default FeaturedApps;
