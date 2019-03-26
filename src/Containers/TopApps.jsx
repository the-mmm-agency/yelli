import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

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

const TopApps = ({ pageLength }) => {
  const { data, loading } = useQuery(TOP_APPS);
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

TopApps.propTypes = {
  pageLength: PropTypes.number.isRequired
};

export default TopApps;
