import React, { memo } from 'react';
import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch
} from '@material-ui/core';
import { ReactComponent as DarkThemeIcon } from '@mdi/svg/svg/weather-night.svg';
import { ReactComponent as LightThemeIcon } from '@mdi/svg/svg/weather-sunny.svg';

import { useDarkTheme } from 'Themes/ThemeProvider';

const DarkThemeToggle = memo(() => {
  const themeState = useDarkTheme();
  return (
    <MenuItem onClick={() => themeState.toggle()}>
      <ListItemIcon color="inherit">
        {themeState.dark ? (
          <DarkThemeIcon fill="currentColor" />
        ) : (
          <LightThemeIcon fill="currentColor" />
        )}
      </ListItemIcon>
      <ListItemText
        inset
        primary={`${themeState.dark ? 'Dark' : 'Light'} theme`}
      />
      <ListItemSecondaryAction>
        <Switch
          checked={themeState.dark}
          color="primary"
          onChange={() => themeState.toggle()}
        />
      </ListItemSecondaryAction>
    </MenuItem>
  );
});

export default DarkThemeToggle;
