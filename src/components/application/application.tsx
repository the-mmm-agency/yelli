import { graphql } from 'gatsby'
import React from 'react'

import Card from './application.card'
import ListItem from './application.listItem'
import { ApplicationProps } from 'types'

interface ApplicationPropsWithVariant
  extends ApplicationProps {
  variant?: 'card' | 'list'
}

const Application: React.FC<
  ApplicationPropsWithVariant
> = ({ variant = 'card', ...props }) => {
  const Component = variant === 'list' ? ListItem : Card
  return <Component {...props} />
}

export const query = graphql`
  fragment Application on GraphCMS_Application {
    id
    title
    slug
    category {
      name
    }
    icon {
      ...GraphCmsImg
    }
  }
`

export default Application
