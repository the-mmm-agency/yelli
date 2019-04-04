import { Button, Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';

const UserMenu = memo(({ name }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
    localStorage.setItem('token', null);
    window.location.reload();
  };
  return (
    <React.Fragment>
      <Button
        aria-haspopup="true"
        aria-owns={anchorEl ? 'user-menu' : undefined}
        color="inherit"
        onClick={handleClick}
      >
        {name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="user-menu"
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
});

UserMenu.propTypes = {
  name: PropTypes.string.isRequired
};

export default UserMenu;
