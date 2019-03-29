import { useQuery } from 'react-apollo-hooks';
import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import SwipableAppList from 'Components/SwipableAppList';

const NEW_APPS = gql`
  query newApps {
    apps(first: 8, orderBy: createdAt_DESC) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const NewApps = ({ pageLength }) => {
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
        {[...new Array(pageLength).keys()].map(key => (
          <AppCard key={key} loading />
        ))}
      </Grid>
    );
  }
  return (
    <SwipableAppList
      AppComponent={AppCard}
      apps={data.apps}
      pageLength={pageLength}
    />
  );
};

NewApps.propTypes = {
  pageLength: PropTypes.number.isRequired
};

export default NewApps;
