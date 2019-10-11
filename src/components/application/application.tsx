import { graphql } from 'gatsby'
import React from 'react'

import Card from './application.card'
import ListItem from './application.listItem'

import { AppProps } from 'src/types'

const Application: React.FC<AppProps> = ({
  variant = 'card',
  slug,
  ListItemProps,
  CardProps,
  ...props
}) => {
  const Component = variant === 'list' ? ListItem : Card
  const rest =
    variant === 'list' ? ListItemProps : CardProps
  return (
    <Component to={`/app/${slug}`} {...props} {...rest} />
  )
}

export const query = graphql`
  fragment Application on Yelli_Application {
    id
    title
    slug
    category {
      name
    }
    icon {
      ...AppIcon
    }
  }
`

export default Application
