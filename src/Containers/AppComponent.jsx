import { useQuery } from 'react-apollo-hooks';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import AppCard from 'Containers/AppCard';
import AppListItem from 'Containers/AppListItem';
import APP from 'Graphql/AppQuery.gql';
// import APP_INFO from 'Graphql/AppInfoQuery.gql';

const AppComponent = memo(({ id, isLoading, type }) => {
  const AppItem = type === 'list' ? AppListItem : AppCard;
  const { data, loading } = useQuery(APP, {
    skip: isLoading,
    variables: { id }
  });

  // const client = useApolloClient();

  const history = useHistory();

  const handleClick = () => {
    history.push(`/app/${data.application.slug || ''}`);
  };

  const prefetchApp = () => {
    // client.query({
    //   query: APP_INFO,
    //   skip: isLoading,
    //   variables: { id }
    // });
  };

  if (loading || isLoading || !data) {
    return <AppItem loading />;
  }

  return (
    <AppItem
      category={data.application.category}
      handleClick={handleClick}
      icon={data.application.icon}
      prefetchApp={prefetchApp}
      title={data.application.title}
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
