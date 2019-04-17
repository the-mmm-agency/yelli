import { useQuery, useApolloClient } from 'react-apollo-hooks';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import AppCard from 'Containers/AppCard';
import AppListItem from 'Containers/AppListItem';
import APP from 'Graphql/AppQuery.gql';
import APP_INFO from 'Graphql/AppInfoQuery.gql';

const AppComponent = memo(({ id, isLoading, type }) => {
  const AppItem = type === 'list' ? AppListItem : AppCard;
  const { data, loading } = useQuery(APP, {
    skip: isLoading,
    variables: { id }
  });

  const client = useApolloClient();

  const prefetchApp = () => {
    client.query({
      query: APP_INFO,
      skip: isLoading,
      variables: { id }
    });
  };

  const history = useHistory();

  const handleClick = () => {
    history.push(`/app/${data.app.name || ''}`);
  };

  if (loading || isLoading || !data) {
    return <AppItem loading />;
  }

  return (
    <AppItem
      category={data.app.category}
      handleClick={handleClick}
      icon={data.app.icon}
      name={data.app.name}
      prefetchApp={prefetchApp}
    />
  );
});

AppComponent.defaultProps = {
  type: 'card'
};

AppComponent.propTypes = {
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  type: PropTypes.oneOf(['list', 'card'])
};

export default AppComponent;
