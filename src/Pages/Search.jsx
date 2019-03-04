import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import React, { useState } from 'react';

import SearchList from 'Containers/SearchList';

export default mount({
  '/': route({
    async getView() {
      return <Search />;
    }
  })
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Search = React.memo(() => {
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  return (
    <Grid className={classes.root} container direction="column">
      <TextField
        fullWidth
        label="Search"
        onChange={event => setSearchString(event.target.value)}
        placeholder="Enter Search"
        value={searchString}
      />
      <SearchList searchString={searchString} />
    </Grid>
  );
});
