import {
  FaceOutlined,
  BuildOutlined,
  FavoriteOutlined,
  ShoppingBasketOutlined,
  AudiotrackOutlined,
  MapOutlined,
  FastfoodOutlined,
  VideogameAssetOutlined
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const Icons = {
  Food: FastfoodOutlined,
  Games: VideogameAssetOutlined,
  Lifestyle: FavoriteOutlined,
  Music: AudiotrackOutlined,
  Shopping: ShoppingBasketOutlined,
  Social: FaceOutlined,
  Tools: BuildOutlined,
  Travel: MapOutlined
};

const CategoryIcon = ({ name }) => {
  const Icon = Icons[name];
  return <Icon />;
};

CategoryIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default CategoryIcon;
