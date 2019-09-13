import { graphql } from 'gatsby'
import React from 'react'

import Card from './application.card'
import ListItem from './application.listItem'

import { AppProps } from 'src/types'

const Application: React.FC<AppProps> = ({
  variant = 'card',
  slug,
  ...props
}) => {
  const Component = variant === 'list' ? ListItem : Card
  return <Component to={`/app/${slug}`} {...props} />
}

export const query = graphql`
  fragment Application on GraphCool_Application {
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
