import {
  CircularProgress,
  ListItemIcon,
  ListItemText,
  MenuItem,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import CategoryIcon from 'Components/CategoryIcon';
import GET_CATEGORIES from 'Graphql/GetCategories.gql';

const useStyles = makeStyles(theme => ({
  icon: {
    marginTop: 2
  },
  root: {
    margin: theme.spacing(1)
  },
  selectMenu: {
    display: 'flex',
    padding: '14.5px 14px'
  }
}));

const CategoriesSelect = ({ setValue, value }) => {
  const { data, loading } = useQuery(GET_CATEGORIES);
  const classes = useStyles();

  if (loading) {
    return (
      <TextField
        fullWidth
        InputProps={{
          endAdornment: <CircularProgress />
        }}
        label="Category"
        variant="outlined"
      />
    );
  }

  return (
    <TextField
      className={classes.root}
      fullWidth
      label="Category"
      onChange={event => setValue(event.target.value)}
      select
      SelectProps={{
        classes: {
          selectMenu: classes.selectMenu
        }
      }}
      value={value}
      variant="outlined"
    >
      {data.categories.map(category => (
        <MenuItem key={category.id} value={category.name}>
          <ListItemIcon className={classes.icon}>
            <CategoryIcon name={category.name} />
          </ListItemIcon>
          <ListItemText
            inset
            primary={category.name}
            primaryTypographyProps={{ noWrap: true }}
          />
        </MenuItem>
      ))}
    </TextField>
  );
};

CategoriesSelect.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default CategoriesSelect;
