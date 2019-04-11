import { useQuery, useApolloClient } from 'react-apollo-hooks';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import React, { memo } from 'react';

import AppCard from 'Containers/AppCard';
import AppListItem from 'Containers/AppListItem';
import APP_INFO from 'Graphql/AppInfo.gql';
import APP_CARD from 'Graphql/AppCard.gql';

const APP = gql`
  query app($id: ID!) {
    app(where: { id: $id }) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const AppComponent = memo(({ id, isLoading, type }) => {
  const AppItem = type === 'list' ? AppListItem : AppCard;
  const { data, loading } = id
    ? useQuery(APP, {
        variables: { id }
      })
    : { data: null, loading: true };
  if (loading || isLoading || !data.app) {
    return <AppItem loading />;
  }
  const client = useApolloClient();

  const { name, icon, category } = data.app
    ? data.app
    : {
        category: '',
        icon: '',
        name: ''
      };

  const prefetchApp = () => {
    client.query({
      query: APP_INFO,
      variables: { name }
    });
  };

  const history = useHistory();

  const handleClick = () => {
    history.push(`/app/${name}`);
  };

  return (
    <AppItem
      category={category}
      handleClick={handleClick}
      icon={icon}
      name={name}
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
