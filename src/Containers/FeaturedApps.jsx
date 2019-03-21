import { useQuery } from 'react-apollo-hooks';
import { useTheme } from '@material-ui/styles';
import React, { memo } from 'react';
import gql from 'graphql-tag';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import FeaturedAppCard from 'Containers/FeaturedAppCard';
import SwipableAppList from 'Components/SwipableAppList';

const FEATURED_APPS = gql`
  query apps {
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
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const pageLength = isSmall ? 1 : 3;
  if (loading) {
    return (
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {isSmall ? (
          <FeaturedAppCard loading />
        ) : (
          <>
            <FeaturedAppCard loading />
            <FeaturedAppCard loading />
            <FeaturedAppCard loading />
          </>
        )}
      </ul>
    );
  }
  return (
    <SwipableAppList
      AppComponent={FeaturedAppCard}
      apps={data.apps}
      pageLength={pageLength}
    />
  );
});

export default FeaturedApps;
