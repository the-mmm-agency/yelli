import { Fade, Grid, InputAdornment, TextField } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
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
    padding: theme.spacing(2)
  }
}));

const Search = React.memo(() => {
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  return (
    <Fade appear in>
      <Grid className={classes.root} container direction="column">
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          label="Search"
          onChange={event => setSearchString(event.target.value)}
          placeholder="Enter Search"
          value={searchString}
          variant="outlined"
        />
        <SearchList searchString={searchString} />
      </Grid>
    </Fade>
  );
});
