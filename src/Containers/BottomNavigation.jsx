import {BottomNavigation, BottomNavigationAction, Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';


function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<Icon>folder</Icon>}
      />
    </BottomNavigation>
  );
}

export default LabelBottomNavigation;
