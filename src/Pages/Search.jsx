import { Grid, InputAdornment, TextField } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
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

const Search = React.memo(() => {
  const [searchString, setSearchString] = useState('');
  return (
    <Grid container direction="column">
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
  );
});
