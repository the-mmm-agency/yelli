import React from 'react'
import { Hit } from 'react-instantsearch-core'
import { Highlight, Snippet } from 'react-instantsearch-dom'

import {
  Category,
  Content,
  Description,
  Icon,
  ListItem,
  Title,
} from './search.hit.css'

import Flex from 'src/elements/flex'
import Link from 'src/elements/link'
import { Application } from 'src/graphql-types'

type Props = {
  hit: Hit<
    Pick<
      Application,
      'id' | 'title' | 'category' | 'slug' | 'description'
    > & {
      icon: {
        url: string
      }
    }
  >
}

const SearchHit: (
  onClick: VoidFunction
) => React.FC<Props> = onClick => ({ hit }) => (
  <ListItem
    button
    disableGutters
    divider
    component={Link}
    onClick={onClick}
    to={`/app/${hit.slug}`}
  >
    <Icon>
      <img
        alt={`${hit.title} icon`}
        src={`https://imageproxy1234.herokuapp.com/50/${hit.icon.url}`}
      />
    </Icon>
    <Content>
      <Flex>
        <Title variant="h6">
          <Highlight
            attribute="title"
            hit={hit}
            tagName="mark"
          />{' '}
        </Title>
        <Category component="span" variant="overline">
          <Highlight
            attribute="category.name"
            hit={hit}
            tagName="mark"
          />
        </Category>
      </Flex>
      <Description>
        <Snippet
          attribute="description"
          hit={hit}
          tagName="em"
        />
      </Description>
    </Content>
  </ListItem>
)

export default SearchHit
