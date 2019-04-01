import { useQuery } from 'react-apollo-hooks';
import { Grid } from '@material-ui/core';
import React from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import SwipableAppList from 'Components/SwipableAppList';

const NEW_APPS = gql`
  query new {
    apps(first: 10, orderBy: createdAt_DESC) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const NewApps = () => {
  const { data, loading } = useQuery(NEW_APPS);
  if (loading) {
    return (
      <Grid
        alignItems="center"
        component="ul"
        container
        justify="center"
        wrap="nowrap"
      >
        {[...new Array(10).keys()].map(key => (
          <AppCard key={key} loading />
        ))}
      </Grid>
    );
  }
  return <SwipableAppList AppComponent={AppCard} apps={data.apps} />;
};

export default NewApps;
