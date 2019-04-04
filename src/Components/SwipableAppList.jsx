import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-scroll-snap-points-x': 'repeat(100%)',
    '-webkit-scroll-snap-type': 'manditory',
    listStyle: 'none',
    overflowX: 'scroll',
    overflowY: 'hidden',
    'padding-inline-start': `${theme.spacing(2)}px`,
    'scroll-snap-type': 'x mandatory',
    whiteSpace: 'nowrap'
  }
}));

const SwipableAppList = memo(({ AppComponent, apps, loading }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} component="ul" container item wrap="nowrap">
      {loading
        ? [...new Array(10).keys()].map(key => (
            <AppComponent key={key} loading />
          ))
        : apps.map(app => {
            // eslint-disable-next-line no-param-reassign
            delete app.__typename;
            return <AppComponent key={app.id} {...app} />;
          })}
    </Grid>
  );
});

SwipableAppList.propTypes = {
  AppComponent: PropTypes.element.isRequired,
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired,
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool.isRequired
};

export default SwipableAppList;
