import { IconButton, Menu } from '@material-ui/core'
import { SettingsOutlined as SettingsIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import { css } from '@emotion/core'

import DarkThemeToggle from 'components/darkThemeToggle'

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        aria-haspopup="true"
        aria-owns={anchorEl ? 'settings-menu' : undefined}
        color="primary"
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        css={css`
          .MuiMenu-paper {
            min-width: 230px;
          }
        `}
        id="settings-menu"
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <DarkThemeToggle />
      </Menu>
    </>
  )
}

export default UserMenu
