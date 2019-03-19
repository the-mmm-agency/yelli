import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';
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
    '&:last-child': {
      padding: theme.spacing(1)
    },
    padding: 'none'
  },
  icon: {
    borderRadius: 15,
    height: 'auto',
    margin: 'auto',
    marginTop: theme.spacing(1),
    objectFit: 'contain',
    padding: theme.spacing(2),
    width: '70%'
  },
  root: {
    '&:hover': {
      boxShadow: theme.shadows[1]
    },
    border: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1
    },
    boxShadow: 'none'
  }
}));

const AppCard = React.memo(({ id, name, icon, category, loading }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <Card className={classes.root} component="li">
        <CardMedia className={classes.icon}>
          <Skeleton circle height="100%" width="100%" />
        </CardMedia>
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
    history.push(`/app/${id}`);
  };

  return (
    <Grid item lg={4} md={3}>
      <Card className={classes.root}>
        <CardActionArea className={classes.actionArea} onClick={handleClick}>
          <img alt={name} className={classes.icon} src={icon} />
          <CardContent className={classes.content}>
            <Typography color="inherit" noWrap>
              {name}
            </Typography>
            <Typography color="textSecondary" noWrap>
              {category.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
});

AppCard.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  name: PropTypes.string
};

export default AppCard;
