import { ButtonBase, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  card: {
    '&:hover': {
      boxShadow: theme.shadows[1],
      color: theme.palette.primary.main
    },
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: 'none',
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'column',
    transition: theme.transitions.create(
      ['box-shadow', 'border-color', 'color'],
      {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.sharp
      }
    )
  },
  root: {
    ...theme.shape
  }
}));

const CardButton = ({
  children,
  className: classNameProp,
  CardProps,
  ButtonProps
}) => {
  const classes = useStyles();
  return (
    <ButtonBase
      classes={{ root: classNames(classes.root, classNameProp) }}
      {...ButtonProps}
    >
      <Card
        classes={{ root: classes.card, ...CardProps.classes }}
        {...CardProps}
      >
        {children}
      </Card>
    </ButtonBase>
  );
};

CardButton.defaultProps = {
  ButtonProps: {},
  CardProps: {}
};

CardButton.propTypes = {
  ButtonProps: PropTypes.object,
  CardProps: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  className: PropTypes.string
};

export default CardButton;
