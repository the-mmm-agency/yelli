import { Avatar, IconButton, Menu } from '@material-ui/core';
import { AccountCircleOutlined as AccountIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React, { memo, useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

import UserMenuList from 'Containers/UserMenuList';

const GET_NAME = gql`
  query currentName {
    me {
      name
    }
  }
`;

const useStyles = makeStyles({
  button: {
    marginLeft: 'auto'
  },
  menuPaper: {
    minWidth: 230
  }
});

const UserMenu = memo(() => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data, loading, error } = useQuery(GET_NAME);
  const isLoggedIn = !error && !!data.me && !loading;
  return (
    <>
      <IconButton
        aria-haspopup="true"
        aria-owns={anchorEl ? 'user-menu' : undefined}
        className={classes.button}
        color="primary"
        disabled={loading}
        onClick={handleClick}
      >
        {!isLoggedIn ? (
          <AccountIcon />
        ) : (
          <Avatar>{data.me && data.me.name.substring(0, 1)}</Avatar>
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        classes={{ paper: classes.menuPaper }}
        id="user-menu"
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <UserMenuList handleClose={handleClose} isLoggedIn={isLoggedIn} />
      </Menu>
    </>
  );
});

export default UserMenu;
