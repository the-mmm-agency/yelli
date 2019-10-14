import { IconButton, Tooltip } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { graphql } from 'gatsby'
import React from 'react'

import Card from './application.card'
import ListItem from './application.listItem'

import { useRemoveFavorite } from 'src/hooks/useFavorite'
import { AppProps } from 'src/types'

const Application: React.FC<AppProps> = ({
  variant = 'card',
  slug,
  ...props
}) => {
  if (variant === 'favorite') {
    const remove = useRemoveFavorite(props.id, props.title)
    return (
      <ListItem
        {...props}
        action={
          <Tooltip title="Remove from favorites">
            <IconButton
              aria-label="Remove from favorites"
              onClick={remove}
            >
              <Close />
            </IconButton>
          </Tooltip>
        }
        to={`/app/${slug}`}
      />
    )
  }
  const Component = variant === 'list' ? ListItem : Card
  return <Component to={`/app/${slug}`} {...props} />
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
