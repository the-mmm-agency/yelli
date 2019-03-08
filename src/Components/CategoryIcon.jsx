import {
  FaceOutlined,
  BuildOutlined,
  FavoriteOutlined,
  ShoppingBasketOutlined,
  AudiotrackOutlined,
  MapOutlined,
  FastfoodOutlined,
  VideogameAssetOutlined,
  DomainOutlined,
  StarOutlined
} from '@material-ui/icons';
import { ReactComponent as Newspaper } from '@mdi/svg/svg/newspaper.svg';
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
  Travel: MapOutlined,
  News: Newspaper,
  Business: DomainOutlined,
  Entertainment: StarOutlined
};

const CategoryIcon = React.memo(({ name }) => {
  const Icon = Icons[name];
  return <Icon fill="currentColor" />;
});

CategoryIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default CategoryIcon;
