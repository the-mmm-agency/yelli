import { Divider, Grid, Typography, Button } from '@material-ui/core';
import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import Skeleton from 'Components/Skeleton';
import APP_INFO from 'Graphql/AppInfo.gql';

export default mount({
  '/:name': route({
    async getTitle(req) {
      return `Yelli - ${req.params.name}`;
    },
    async getView(req) {
      return <Info name={req.params.name} />;
    }
  })
});

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: 4,
    marginTop: 'auto'
  },
  buttonLabel: {
    textTransform: 'capitalize'
  },
  category: {
    fontWeight: 500
  },
  description: {
    fontSize: theme.typography.body1.fontSize,
    padding: {
      right: theme.spacing(8)
    }
  },
  divider: {
    margin: {
      bottom: theme.spacing(2),
      left: theme.spacing(-3),
      top: theme.spacing(1)
    },
    width: '120%'
  },
  icon: {
    borderRadius: 15,
    filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
    height: theme.spacing(14),
    margin: theme.spacing(2),
    width: theme.spacing(14)
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    height: theme.spacing(15),
    margin: theme.spacing(1),
    marginTop: 10
  },
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(4)
    },
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    padding: {
      left: theme.spacing(4),
      top: theme.spacing(4)
    }
  },
  screenshot: {
    [theme.breakpoints.down('sm')]: {
      height: 355,
      width: 200
    },
    border: {
      color: theme.palette.divider,
      radius: 15,
      style: 'solid',
      width: 1
    },
    flexShrink: 0,
    height: '45vw',
    marginRight: theme.spacing(2),
    width: '25vw'
  },
  screenshots: {
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-scroll-snap-points-x': 'repeat(100%)',
    '-webkit-scroll-snap-type': 'manditory',
    [theme.breakpoints.up('md')]: {
      height: 'auto'
    },
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    overflowY: 'hidden',
    'scroll-snap-type': 'x mandatory',
    whiteSpace: 'nowrap'
  }
}));

const Info = ({ name }) => {
  const classes = useStyles();
  const { data, loading } = useQuery(APP_INFO, {
    variables: { name }
  });
  if (loading || !data.app) {
    return (
      <Grid className={classes.root} container spacing={4}>
        <Grid container>
          <Grid item xs="auto">
            <div className={classes.icon}>
              <Skeleton circle height="100%" width="100%" />
            </div>
          </Grid>
          <Grid className={classes.item} item xs="auto">
            <Typography variant="h6">
              <Skeleton />
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              <Skeleton />
            </Typography>
            <div className={classes.button}>
              <Skeleton height={36} width={164} />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.description} paragraph>
            <Skeleton width="30%" />
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Grid className={classes.screenshots} container item spacing={2}>
          <div className={classes.screenshot}>
            <Skeleton height="100%" width="100%" />
          </div>
          <div className={classes.screenshot}>
            <Skeleton height="100%" width="100%" />
          </div>
          <div className={classes.screenshot}>
            <Skeleton height="100%" width="100%" />
          </div>
        </Grid>
      </Grid>
    );
  }
  const { category, description, icon, screenshots, url } = data.app;
  return (
    <Grid className={classes.root} container spacing={4}>
      <Grid container>
        <Grid item xs="auto">
          <img
            alt={name}
            className={classes.icon}
            itemProp="image"
            src={icon}
          />
        </Grid>
        <Grid className={classes.item} item xs="auto">
          <Typography component="h1" itemProp="name" variant="h6">
            {name}
          </Typography>
          <Typography
            className={classes.category}
            color="textSecondary"
            component="h2"
            gutterBottom
            variant="h6"
          >
            {category.name}
          </Typography>
          <Button
            classes={{
              label: classes.buttonLabel
            }}
            className={classes.button}
            color="primary"
            href={url}
            size="small"
            target="_blank"
            variant="outlined"
          >
            <OpenIcon fontSize="inherit" />
            &nbsp; Launch App
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography
          className={classes.description}
          itemprop="description"
          paragraph
        >
          {description}
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
      <Grid className={classes.screenshots} container item spacing={4}>
        {screenshots.map(screenshot => (
          <img
            key={screenshot}
            alt={data.app.name}
            className={classes.screenshot}
            src={screenshot}
          />
        ))}
      </Grid>
    </Grid>
  );
};

Info.propTypes = {
  name: PropTypes.string
};
