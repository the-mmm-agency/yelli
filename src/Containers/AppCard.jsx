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
    display: 'flex',
    flexDirection: 'column'
  },
  category: {
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.body2.fontSize
    }
  },
  content: {
    maxWidth: '25vw',
    padding: {
      bottom: theme.spacing(1),
      left: theme.spacing(1),
      right: theme.spacing(1)
    }
  },
  icon: {
    borderRadius: 15,
    margin: 'auto',
    maxWidth: '100%',
    objectFit: 'contain',
    padding: theme.spacing(1)
  },
  iconSkeleton: {
    [theme.breakpoints.down('sm')]: {
      height: 100,
      width: 100
    },
    height: 120,
    width: 120
  },
  root: {
    [theme.breakpoints.down('md')]: {
      maxWidth: `calc(100% / 2 - ${theme.spacing(1)}px)`,
      width: `calc(100% / 3 - ${theme.spacing(1)}px)`
    },
    '&:hover': {
      boxShadow: theme.shadows[1]
    },
    border: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1
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
    maxWidth: `calc(100% / 5 - ${theme.spacing(1)}px)`,
    width: `calc(100% / 6 - ${theme.spacing(1)}px)`
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
        <CardActionArea className={classes.actionArea} onClick={handleClick}>
          <img alt={name} className={classes.icon} src={icon} />
          <CardContent className={classes.content}>
            <Typography align="center" color="inherit" noWrap>
              {name}
            </Typography>
            <Typography align="center" color="textSecondary" noWrap>
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
