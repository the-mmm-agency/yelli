import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
  root: {
    textDecoration: 'none'
  }
});

const StyledLink = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Link className={classes.root} {...props}>
      {children}
    </Link>
  );
};

StyledLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export default StyledLink;
