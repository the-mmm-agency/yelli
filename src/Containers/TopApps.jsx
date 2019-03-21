import { useQuery } from 'react-apollo-hooks';
import { useTheme } from '@material-ui/styles';
import React from 'react';
import gql from 'graphql-tag';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import SwipableAppList from 'Components/SwipableAppList';

const TOP_APPS = gql`
  query topApps {
    apps(first: 10, orderBy: rank_DESC) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const TopApps = () => {
  const { data, loading } = useQuery(TOP_APPS);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const pageLength = isSmall ? 3 : 6;
  if (loading) {
    return (
      <div style={{ display: 'flex' }}>
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
        <AppCard loading />
      </div>
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

export default TopApps;
