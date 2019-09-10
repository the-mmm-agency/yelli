import {
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { FixedObject } from 'gatsby-image'
import { has } from 'ramda'
import React from 'react'
import { Hit } from 'react-instantsearch-core'
import { Highlight, Snippet } from 'react-instantsearch-dom'

import { Category, Icon, ListItem } from './search.hit.css'

import Flex from 'src/elements/flex'
import Link from 'src/elements/link'
import { Application } from 'src/graphql-types'

type HitProps = {
  hit: Hit<
    Pick<
      Application,
      'title' | 'category' | 'slug' | 'description'
    > & {
      icon: {
        width: number
        height: number
        base64: string
        aspectRatio: number
        url: string
      }
    }
  >
}

const setIconUrl = (url: string): string =>
  url.replace('files.graph.cool', 'images.graph.cool/v1')

const SearchHit: React.FC<HitProps> = ({ hit }) => {
  if (has('icon', hit)) {
    const { icon } = hit
    const iconUrl = `${setIconUrl(icon.url)}/50x50`
    return (
      <Link to={`/app/${hit.slug}`}>
        <ListItem button disableGutters divider>
          <ListItemIcon>
            <Icon
              fixed={
                {
                  base64: icon.base64,
                  height: 50,
                  src: iconUrl,
                  srcWebp: `${iconUrl}.webp`,
                  width: 50,
                } as FixedObject
              }
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Flex>
                <Typography component="h6" variant="h6">
                  <Highlight
                    attribute="title"
                    hit={hit}
                    tagName="mark"
                  />{' '}
                </Typography>
                <Category>
                  <Highlight
                    attribute="category.name"
                    hit={hit}
                    tagName="mark"
                  />
                </Category>
              </Flex>
            }
            secondary={
              <Snippet
                attribute="description"
                hit={hit}
                tagName="em"
              />
            }
            secondaryTypographyProps={{
              color: 'textSecondary',
              component: 'p',
              variant: 'subtitle1',
            }}
          />
        </ListItem>
      </Link>
    )
  }
  return null
}

export default SearchHit
