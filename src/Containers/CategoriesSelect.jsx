import {
  CircularProgress,
  ListItemIcon,
  ListItemText,
  MenuItem,
  TextField
} from '@material-ui/core';
import { useQuery } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import gql from 'graphql-tag';

import CategoryIcon from 'Components/CategoryIcon';

const GET_CATEGORIES = gql`
  query categories {
    categories {
      name
      id
    }
  }
`;

const CategoriesSelect = ({ classes, setValue, value }) => {
  const { data, loading } = useQuery(GET_CATEGORIES);

  if (loading) {
    return (
      <TextField
        className={classes.margin}
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
      className={classNames(classes.margin, classes.flex)}
      fullWidth
      label="Category"
      onChange={event => setValue(event.target.value)}
      select
      SelectProps={{
        classes: {
          selectMenu: classes.flex
        }
      }}
      value={value}
      variant="outlined"
    >
      {data.categories.map(category => (
        <MenuItem key={category.id} value={category.name}>
          <ListItemIcon>
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
  classes: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default CategoriesSelect;
