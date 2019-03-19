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
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const pageLength = isSmall ? 1 : 3;
  if (loading) {
    return (
      <>
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
        <FeaturedAppCard loading />
      </>
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
