import {
  Box,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { FixedObject } from 'gatsby-image'
import { has } from 'ramda'
import React from 'react'
import { Hit } from 'react-instantsearch-core'
import { Highlight, Snippet } from 'react-instantsearch-dom'

import { Icon, ListItem } from './search.hit.css'

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
                <Highlight
                  attribute="title"
                  hit={hit}
                  tagName="mark"
                />{' '}
                <Box
                  bgcolor="background.default"
                  color="text.secondary"
                  component="span"
                  fontSize="0.8rem"
                  height="1.5rem"
                  lineHeight={2.1}
                  mx={1}
                  px={1}
                >
                  <Highlight
                    attribute="category.name"
                    hit={hit}
                    tagName="mark"
                  />
                </Box>
              </Flex>
            }
            primaryTypographyProps={{
              color: 'textPrimary',
              variant: 'h6',
            }}
            secondary={
              <Snippet
                attribute="description"
                hit={hit}
                tagName="mark"
              />
            }
            secondaryTypographyProps={{
              color: 'textSecondary',
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
