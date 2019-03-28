/* eslint-disable react/void-dom-elements-no-children */
import {
  Card,
  CardActionArea,
  CardContent,
  Fade,
  Typography
} from '@material-ui/core';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles(theme => ({
  actionArea: {
    maxWidth: 'fit-content',
    padding: theme.spacing(1)
  },
  actionAreaFocusHighlight: {
    ...theme.shape
  },
  content: {
    padding: {
      bottom: theme.spacing(1),
      left: theme.spacing(1),
      right: theme.spacing(1)
    }
  },
  icon: {
    borderRadius: 15,
    objectFit: 'contain',
    width: '100%'
  },
  iconSkeleton: {
    [theme.breakpoints.down('sm')]: {
      height: 100,
      width: 100
    },
    height: 120,
    width: 120
  },
  name: {
    fontWeight: 500
  },
  root: {
    [theme.breakpoints.between('xs', 'sm')]: {
      maxWidth: `calc(100% / 4 - ${theme.spacing(1)}px)`,
      width: `calc(100% / 4 - ${theme.spacing(1)}px)`
    },
    [theme.breakpoints.between('md', 'lg')]: {
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
      bottom: theme.spacing(1),
      right: theme.spacing(1),
      top: theme.spacing(1)
    },
    maxHeight: 'fit-content',
    maxWidth: `calc(100% / 8 - ${theme.spacing(1)}px)`,
    width: `calc(100% / 8 - ${theme.spacing(1)}px)`
  }
}));

const AppCard = React.memo(({ name, icon, category, loading }) => {
  const classes = useStyles();

  if (loading) {
    return (
      <Card className={classes.root} component="li">
        <div className={classNames(classes.icon, classes.iconSkeleton)}>
          <Skeleton height="100%" width="100%" />
        </div>
        <CardContent className={classes.content}>
          <Typography color="inherit" noWrap>
            <Skeleton />
          </Typography>
          <Typography color="textSecondary" noWrap>
            <Skeleton />
          </Typography>
        </CardContent>
      </Card>
    );
  }

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
