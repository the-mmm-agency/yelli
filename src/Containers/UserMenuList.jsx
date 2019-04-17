import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useApolloClient } from 'react-apollo-hooks';
import { ReactComponent as LoginIcon } from '@mdi/svg/svg/login-variant.svg';
import { ReactComponent as LogoutIcon } from '@mdi/svg/svg/logout-variant.svg';

import DarkThemeToggle from 'Containers/DarkThemeToggle';
import { dispatch } from 'state';

const openAuth = () => dispatch({ type: 'openAuth' });

const UserMenuList = memo(({ isLoggedIn, handleClose }) => {
  const client = useApolloClient();
  const handleLogout = () => {
    handleClose();
    localStorage.setItem('token', null);
    client.resetStore();
    window.location.reload();
  };
  return (
    <>
      <DarkThemeToggle />
      <MenuItem onClick={isLoggedIn ? handleLogout : openAuth}>
        <ListItemIcon color="inherit">
          {isLoggedIn ? (
            <LogoutIcon fill="currentColor" />
          ) : (
            <LoginIcon fill="currentColor" />
          )}
        </ListItemIcon>
        <ListItemText
          primary={isLoggedIn ? 'Logout' : 'Login'}
          primaryTypographyProps={{ variant: 'subtitle1' }}
        />
      </MenuItem>
    </>
  );
});

UserMenuList.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default UserMenuList;
