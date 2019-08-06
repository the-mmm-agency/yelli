import {
  FaceOutlined,
  BuildOutlined,
  FavoriteBorderOutlined,
  ShoppingBasketOutlined,
  AudiotrackOutlined,
  MapOutlined,
  FastfoodOutlined,
  VideogameAssetOutlined,
  DomainOutlined,
  StarsOutlined,
} from '@material-ui/icons'
import { ReactComponent as Newspaper } from '@mdi/svg/svg/newspaper.svg'
import PropTypes from 'prop-types'
import React from 'react'

const Icons = {
  Business: DomainOutlined,
  Entertainment: StarsOutlined,
  Food: FastfoodOutlined,
  Games: VideogameAssetOutlined,
  Lifestyle: FavoriteBorderOutlined,
  Music: AudiotrackOutlined,
  News: Newspaper,
  Shopping: ShoppingBasketOutlined,
  Social: FaceOutlined,
  Tools: BuildOutlined,
  Travel: MapOutlined,
}

const CategoryIcon = ({ name, ...props }) => {
  const Icon = Icons[name]
  return <Icon fill="currentColor" {...props} />
}

CategoryIcon.propTypes = {
  name: PropTypes.string,
}

export default CategoryIcon
