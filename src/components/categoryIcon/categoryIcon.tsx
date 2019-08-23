import {
  AudiotrackOutlined,
  BuildOutlined,
  DomainOutlined,
  FaceOutlined,
  FastfoodOutlined,
  FavoriteBorderOutlined,
  MapOutlined,
  ShoppingBasketOutlined,
  StarsOutlined,
  VideogameAssetOutlined,
} from '@material-ui/icons'
import { Newspaper } from 'mdi-material-ui'
import React from 'react'
import { Category } from 'graphql-types'

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

interface CategoryIconProps {
  name: Category['name']
  className?: string
}

const CategoryIcon: React.FC<CategoryIconProps> = ({
  name,
  className,
}) => {
  const Icon = Icons[name]
  return <Icon fill="currentColor" className={className} />
}

export default CategoryIcon
