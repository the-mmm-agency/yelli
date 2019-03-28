import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import SwipableAppList from 'Components/SwipableAppList';

const NEW_APPS = gql`
  query newApps {
    apps(first: 6, orderBy: createdAt_DESC) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const NewApps = ({ pageLength }) => {
  const { data, loading } = useQuery(NEW_APPS);
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

NewApps.propTypes = {
  pageLength: PropTypes.number.isRequired
};

export default NewApps;
