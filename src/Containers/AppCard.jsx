/* eslint-disable react/void-dom-elements-no-children */
import {
  Card,
  CardActionArea,
  CardContent,
  Fade,
  Typography
} from '@material-ui/core';
import classNames from 'classnames';
import { useApolloClient } from 'react-apollo-hooks';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Skeleton from 'react-loading-skeleton';

import APP_INFO from 'Graphql/AppInfo.gql';

const iconStyle = {
  borderRadius: 15,
  objectFit: 'contain',
  width: '100%'
};

const useStyles = makeStyles(theme => ({
  actionArea: {
    padding: theme.spacing(1)
  },
  actionAreaFocusHighlight: {
    ...theme.shape
  },
  category: {
    fontWeight: 600
  },
  content: {
    padding: {
      left: theme.spacing(1)
    },
    textOverflow: 'ellipsis'
  },
  icon: iconStyle,
  iconPlaceholder: {
    ...iconStyle,
    padding: theme.spacing(1)
  },
  name: {
    fontWeight: 500
  },
  root: {
    [theme.breakpoints.between('xs', 'sm')]: {
      margin: 0,
      maxWidth: `calc(100% / 4)`,
      width: `calc(100% / 4)`
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: `calc(100% / 6 - ${theme.spacing(1)}px)`,
      width: `calc(100% / 6 - ${theme.spacing(1)}px)`
    },
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    height: 'fit-content',
    margin: {
      right: theme.spacing(1),
      top: theme.spacing(1)
    },
    maxHeight: 'fit-content',
    maxWidth: `calc(100% / 8 - ${theme.spacing(1)}px)`,
    width: `calc(100% / 8 - ${theme.spacing(1)}px)`
  },
  skeleton: {
    padding: theme.spacing(1)
  }
}));

const AppCard = memo(({ name, icon, category, loading }) => {
  const classes = useStyles();
  const theme = useTheme();

  if (loading) {
    return (
      <Card
        aria-busy="true"
        aria-disabled="true"
        className={classNames(classes.root, classes.skeleton)}
        component="li"
      >
        <picture className={classes.iconPlaceholder}>
          <source
            srcSet="https://via.placeholder.com/128/f4f4f4/dadce0.webp?text=icon"
            type="image/webp"
          />
          <source
            srcSet="https://via.placeholder.com/128/f4f4f4/dadce0.jpg?text=icon"
            type="image/jpg"
          />
          <img
            alt="Loading"
            src="https://via.placeholder.com/128/f4f4f4/dadce0.jpg?text=icon"
          />
        </picture>
        <CardContent className={classes.content}>
          <Skeleton
            color={theme.palette.text.primary}
            height={theme.typography.body1.fontSize}
            highlightColor={theme.palette.text.secondary}
            style={{
              marginRight: '100%'
            }}
            width="80%"
          />
          <Skeleton
            color={theme.palette.text.primary}
            height={theme.typography.caption.fontSize}
            highlightColor={theme.palette.text.secondary}
            width="50%"
          />
        </CardContent>
      </Card>
    );
  }

  const client = useApolloClient();

  const prefetchApp = () => () => {
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
    <Fade appear in>
      <Card className={classes.root} component="li">
        <CardActionArea
          classes={{ focusHighlight: classes.actionAreaFocusHighlight }}
          className={classes.actionArea}
          onClick={handleClick}
          onFocus={() => prefetchApp()}
          onMouseOver={() => prefetchApp()}
        >
          <img alt={name} className={classes.icon} src={icon} />
          <CardContent className={classes.content}>
            <Typography
              align="left"
              className={classes.name}
              color="inherit"
              noWrap
              variant="body1"
            >
              {name}
            </Typography>
            <Typography
              align="left"
              className={classes.category}
              color="textSecondary"
              noWrap
              variant="caption"
            >
              {category.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fade>
  );
});

AppCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string
  }),
  icon: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string
};

export default AppCard;
