import { graphql } from 'gatsby'
import React from 'react'

import Card from './application.card'
import ListItem from './application.listItem'

import { ApplicationProps } from 'src/types'

const Application: React.FC<
  ApplicationProps & {
    variant?: 'card' | 'list'
  }
> = ({ variant = 'card', ...props }) => {
  const Component = variant === 'list' ? ListItem : Card
  return <Component {...props} />
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
      ...Image
    }
  }
`

export default Application
