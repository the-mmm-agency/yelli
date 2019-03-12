import { Divider, Grid, Typography, Button } from '@material-ui/core';
import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import gql from 'graphql-tag';

export default mount({
  '/:id': route(async req => ({
    view: <Info id={req.params.id} />
  }))
});

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: 'auto',
    width: 128
  },
  description: {
    fontSize: theme.typography.body1.fontSize
  },
  divider: {
    width: '100%'
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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2)
  },
  screenshot: {
    border: {
      color: theme.palette.divider,
      radius: 15,
      style: 'solid',
      width: 1
    },
    width: '100%'
  },
  screenshots: {
    '-webkit-overflow-scrolling': 'touch',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      margin: theme.spacing(2)
    },
    margin: theme.spacing(2),
    overflowX: 'scroll',
    overflowY: 'hidden',
    whiteSpace: 'nowrap'
  }
}));

const GET_APP = gql`
  query app($id: ID!) {
    app(where: { id: $id }) {
      name
      category {
        name
      }
      icon
      description
      screenshots
      url
    }
  }
`;

const Info = React.memo(({ id }) => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_APP, {
    variables: { id }
  });
  if (loading) {
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
              <Skeleton height={36} width={120} />
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
          <Grid item xs={3}>
            <div className={classes.screenshot}>
              <Skeleton height="35vw" width="100%" />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.screenshot}>
              <Skeleton height="35vw" width="100%" />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.screenshot}>
              <Skeleton height="35vw" width="100%" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  const { name, category, description, icon, screenshots, url } = data.app;
  return (
    <Grid className={classes.root} container spacing={4}>
      <Grid container>
        <Grid item xs="auto">
          <img alt={name} className={classes.icon} src={icon} />
        </Grid>
        <Grid className={classes.item} item xs="auto">
          <Typography variant="h6">{name}</Typography>
          <Typography color="textSecondary" gutterBottom>
            {category.name}
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            href={url}
            size="small"
            variant="contained"
          >
            <OpenIcon />
            Launch App
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.description} paragraph>
          {description}
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
      <Grid className={classes.screenshots} container item spacing={2}>
        {screenshots.map(screenshot => (
          <Grid key={screenshot} item xs={3}>
            <img
              alt={data.app.name}
              className={classes.screenshot}
              src={screenshot}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
});

Info.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
