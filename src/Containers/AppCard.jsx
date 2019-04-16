/* eslint-disable react/void-dom-elements-no-children */
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Skeleton from 'Components/Skeleton';

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
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    },
    padding: {
      left: theme.spacing(1)
    },
    textOverflow: 'ellipsis'
  },
  contentSkeleton: {
    '&:last-child': {
      paddingBottom: 0
    },
    padding: {
      left: theme.spacing(1)
    },
    whiteSpace: 'pre-wrap'
  },
  icon: {
    borderRadius: 15,
    objectFit: 'contain',
    width: '100%'
  },
  name: {
    fontWeight: 500
  },
  root: {
    [theme.breakpoints.between('xs', 'sm')]: {
      maxWidth: `calc(100% / 3 - ${theme.spacing(3)}px)`,
      width: `calc(100% / 3 - ${theme.spacing(3)}px)`
    },
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: `calc(100% / 6 - ${theme.spacing(3)}px)`,
      width: `calc(100% / 6 - ${theme.spacing(3)}px)`
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxWidth: `calc(100% / 8 - ${theme.spacing(3)}px)`,
      width: `calc(100% / 8 - ${theme.spacing(3)}px)`
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
    maxWidth: `calc(100% / 10 - ${theme.spacing(3)}px)`,
    width: `calc(100% / 10 - ${theme.spacing(3)}px)`
  },
  skeleton: {
    padding: theme.spacing(1)
  }
}));

const AppCard = memo(
  ({ prefetchApp, handleClick, category, name, icon, loading }) => {
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
          <picture className={classes.icon}>
            <source
              srcSet={`https://via.placeholder.com/128/${
                theme.palette.type === 'dark' ? '3c4361' : 'f4f4f4'
              }/${
                theme.palette.type === 'dark' ? 'dcebff' : 'dadce0'
              }.webp?text=icon`}
              type="image/webp"
            />
            <source
              srcSet={`https://via.placeholder.com/128/${
                theme.palette.type === 'dark' ? '3c4361' : 'f4f4f4'
              }/${
                theme.palette.type === 'dark' ? 'dcebff' : 'dadce0'
              }.jpg?text=icon`}
              type="image/jpg"
            />
            <img
              alt="Loading"
              className={classes.icon}
              src={`https://via.placeholder.com/128/${
                theme.palette.type === 'dark' ? '3c4361' : 'f4f4f4'
              }/${
                theme.palette.type === 'dark' ? 'dcebff' : 'dadce0'
              }.jpg?text=icon`}
            />
          </picture>
          <CardContent className={classes.contentSkeleton}>
            <>
              <Skeleton height={theme.typography.body1.fontSize} width="80%" />
              <Skeleton
                height={theme.typography.caption.fontSize}
                width="50%"
              />
            </>
          </CardContent>
        </Card>
      );
    }

    return (
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
    );
  }
);

AppCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string
  }),
  handleClick: PropTypes.func,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  prefetchApp: PropTypes.func
};

export default AppCard;
