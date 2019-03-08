import { Link } from 'react-navi';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  active: {
    color: theme.palette.primary.main
  },
  root: {
    display: 'flex',
    textDecoration: 'none',
    width: '100%'
  }
}));

const StyledLink = React.memo(({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Link activeClassName={classes.active} className={classes.root} {...props}>
      {children}
    </Link>
  );
});

StyledLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export default StyledLink;
