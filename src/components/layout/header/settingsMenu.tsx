import { css } from '@emotion/core'
import { IconButton, Menu } from '@material-ui/core'
import { SettingsOutlined as SettingsIcon } from '@material-ui/icons'
import React, { useState } from 'react'

import ThemeToggle from './themeToggle'

const SettingsMenu: React.FC = () => {
  const [
    anchorEl,
    setAnchorEl,
  ] = useState<null | HTMLElement>(null)
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        aria-haspopup="true"
        aria-label="Open settings menu"
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
        <ThemeToggle />
      </Menu>
    </>
  )
}

export default SettingsMenu
