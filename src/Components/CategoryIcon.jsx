import {
  Face,
  Build,
  Favorite,
  ShoppingBasket,
  Audiotrack,
  Map,
  Fastfood,
  VideogameAsset
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const Icons = {
  Food: Fastfood,
  Games: VideogameAsset,
  Lifestyle: Favorite,
  Music: Audiotrack,
  Shopping: ShoppingBasket,
  Social: Face,
  Tools: Build,
  Travel: Map
};

const CategoryIcon = ({ name }) => {
  const Icon = Icons[name];
  return <Icon />;
};

CategoryIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default CategoryIcon;
