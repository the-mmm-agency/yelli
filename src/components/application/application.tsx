import { graphql, navigate } from 'gatsby'
import React from 'react'

import Card from './application.card'
import ListItem from './application.listItem'

import { AppProps } from 'src/types'

const Application: React.FC<AppProps> = ({
  variant = 'card',
  slug,
  ...props
}) => {
  const handleClick = (): void => {
    navigate(`/app/${slug}`)
  }
  const Component = variant === 'list' ? ListItem : Card
  return <Component handleClick={handleClick} {...props} />
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
