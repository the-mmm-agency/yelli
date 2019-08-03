import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useQuery } from 'react-apollo-hooks';

import FEATURED_APP from 'Graphql/FeaturedAppQuery.gql';
// import APP_INFO from 'Graphql/AppInfoQuery.gql';
import Skeleton from 'Components/Skeleton';

const useStyles = makeStyles(theme => ({
  actionArea: {
    height: 200
  },
  banner: {
    height: 200,
    width: '100%'
  },
  content: {
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  description: {
    fontSize: '0.7rem',
    fontWeight: 600
  },
  name: {
    fontWeight: 500
  },
  root: {
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      backgroundSize: 'auto 105%',
      borderColor: 'transparent',
      boxShadow: '0 8px 8px 0 rgba(0,0,0,.2)'
    },
    backgroundColor: theme.palette.background.default,
    border: {
      color: theme.palette.type === 'dark' ? '#2a2e48' : '#dadce0',
      style: 'solid',
      width: 1
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 'calc(100% - 70px)',
      width: 'calc(100% - 70px)'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      minWidth: 'calc(50% - 56px)',
      width: 'calc(50% - 56px)'
    },
    boxShadow: 'none',
    margin: theme.spacing(2),
    minWidth: 'calc(100% / 3 - 48px)',
    transition: theme.transitions.create(
      ['border-color', 'opacity', 'box-shadow', 'background-size'],
      {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeInOut
      }
    ),
    width: 'calc(100% / 3 - 48px)'
  }
}));

const FeaturedAppCard = memo(({ id, isLoading }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { data, loading } = useQuery(FEATURED_APP, {
    skip: isLoading,
    variables: { id }
  });

  // const client = useApolloClient();

  const prefetchApp = () => {
    // client.query({
    //   query: APP_INFO,
    //   skip: isLoading,
    //   variables: { id }
    // });
  };

  const history = useHistory();

  const handleClick = () => {
    history.push(`/app/${data.application.slug || ''}`);
  };

  const showSkeleton = isLoading || loading || !data.application;

  return (
    <Card className={classes.root} component="li">
      <CardActionArea
        classes={{ focusHighlight: classes.actionArea }}
        onClick={handleClick}
        onFocus={prefetchApp}
        onMouseOver={prefetchApp}
      >
        {showSkeleton ? (
          <Skeleton height="200px" width="100%" />
        ) : (
          <CardMedia
            className={classes.banner}
            image={data.application.banner.url}
          />
        )}
        <CardContent className={classes.content}>
          <Typography
            align="left"
            className={classes.name}
            noWrap
            variant="body1"
          >
            {showSkeleton ? (
              <Skeleton height={theme.typography.body1.fontSize} width="30%" />
            ) : (
              data.application.title
            )}
          </Typography>
          <Typography
            align="left"
            className={classes.description}
            color="textSecondary"
            noWrap
            variant="body2"
          >
            {showSkeleton ? (
              <Skeleton height="0.7rem" width="60%" />
            ) : (
              data.application.description
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

FeaturedAppCard.propTypes = {
  id: PropTypes.string,
  isLoading: PropTypes.bool
};

export default FeaturedAppCard;
