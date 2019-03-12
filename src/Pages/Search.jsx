import { Divider, Fade, Grid, InputBase } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { fade } from '@material-ui/core/styles/colorManipulator';
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
  inputInput: {
    [theme.breakpoints.up('md')]: {
      width: 200
    },
    padding: {
      bottom: theme.spacing(1),
      left: theme.spacing(10),
      right: theme.spacing(1),
      top: theme.spacing(1)
    },
    width: '100%'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100vw',
    padding: theme.spacing(2)
  },
  search: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.05)
    },
    backgroundColor: fade(theme.palette.common.black, 0.03),
    borderRadius: theme.shape.borderRadius,
    margin: {
      bottom: theme.spacing(2),
      left: 0,
      right: theme.spacing(2)
    },
    position: 'relative',
    transition: theme.transitions.create('background-color'),
    width: '100%'
  },
  searchIcon: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    pointerEvents: 'none',
    position: 'absolute',
    width: theme.spacing(9)
  }
}));

const Search = React.memo(() => {
  const classes = useStyles();
  const [searchString, setSearchString] = useState('');
  return (
    <Fade appear in>
      <Grid className={classes.root} container direction="column">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            classes={{
              input: classes.inputInput,
              root: classes.inputRoot
            }}
            onChange={event => {
              setSearchString(event.target.value);
            }}
            placeholder="Search…"
          />
        </div>
        <Divider />
        <SearchList searchString={searchString} />
      </Grid>
    </Fade>
  );
});
