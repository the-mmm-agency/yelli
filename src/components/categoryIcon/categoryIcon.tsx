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

import { Category } from 'src/graphql-types'

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

interface Props extends Pick<Category, 'name'> {
  className?: string
}

const CategoryIcon: React.FC<Props> = ({
  name,
  className,
}) => {
  const Icon = Icons[name]
  return <Icon className={className} fill="currentColor" />
}

export default CategoryIcon
