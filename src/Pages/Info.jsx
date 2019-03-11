import { Divider, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import gql from 'graphql-tag';

export default mount({
  '/:id': route({
    async getView(request) {
      return <Info id={request.params.id} />;
    }
  })
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
    padding: theme.spacing(2)
  },
  screenshot: {
    borderRadius: 15,
    width: '100%'
  },
  screenshots: {
    '-webkit-overflow-scrolling': 'touch',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
      margin: theme.spacing(2)
    },
    height: '355px',
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
  return (
    <Grid className={classes.root} container spacing={4}>
      <Grid container>
        <Grid item xs="auto">
          {loading ? (
            <div className={classes.icon}>
              <Skeleton circle height="100%" width="100%" />
            </div>
          ) : (
            <img
              alt={data.app.name}
              className={classes.icon}
              src={data.app.icon}
            />
          )}
        </Grid>
        <Grid className={classes.item} item xs="auto">
          <Typography variant="h6">
            {loading ? <Skeleton /> : data.app.name}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {loading ? <Skeleton /> : data.app.category.name}
          </Typography>
          {loading ? (
            <div className={classes.button}>
              <Skeleton height={36} width={120} />
            </div>
          ) : (
            <Button
              className={classes.button}
              color="primary"
              href={data.app.url}
              size="small"
              variant="contained"
            >
              Launch App
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.description} paragraph>
          {loading ? <Skeleton width="30%" /> : data.app.description}
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
      <Grid className={classes.screenshots} container item spacing={2}>
        {loading ? (
          <>
            <Grid item xs={3}>
              <div className={classes.screenshot}>
                <Skeleton height={500} width="100%" />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.screenshot}>
                <Skeleton height={500} width="100%" />
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.screenshot}>
                <Skeleton height={500} width="100%" />
              </div>
            </Grid>
          </>
        ) : (
          data.app.screenshots.map(screenshot => (
            <Grid key={screenshot} item xs={3}>
              <img
                alt={data.app.name}
                className={classes.screenshot}
                src={screenshot}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
});

Info.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
