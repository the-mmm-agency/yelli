import { Close as CloseIcon } from '@material-ui/icons';
import { Snackbar, Button, IconButton } from '@material-ui/core';
import React, { memo } from 'react';

import { dispatch, useGlobalState } from 'state';

const close = () => dispatch({ type: 'closeUpdate' });

const AppUpdate = memo(() => {
  const [open] = useGlobalState('update');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    close();
  };
  return (
    <Snackbar
      action={[
        <Button
          key="reload"
          color="secondary"
          onClick={() => window.location.reload()}
          size="small"
        >
          RELOAD
        </Button>,
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      autoHideDuration={6000}
      ConentProps={{
        'aria-describedby': 'message-id'
      }}
      message={<span id="message-id">An application update is availible</span>}
      onClose={handleClose}
      open={open}
    />
  );
});

export default AppUpdate;
