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

const getPageLength = (isSm, isMd) => {
  if (isMd) {
    return 2;
  }
  if (isSm) {
    return 1;
  }
  return 3;
};

const FeaturedApps = memo(() => {
  const { data, loading } = useQuery(FEATURED_APPS);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const pageLength = getPageLength(isSm, isMd);
  if (loading) {
    return (
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {isSm ? (
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
