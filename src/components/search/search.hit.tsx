import React from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'

import { AppHit } from './search'
import {
  Category,
  Content,
  Description,
  Icon,
  MenuItem,
  Title,
} from './search.hit.css'

import Img from 'src/components/img'
import Flex from 'src/elements/flex'
import Link from 'src/elements/link'

type Props = {
  selected: boolean
  onClick: () => void
  hit: AppHit
}

const SearchHit: React.FC<Props> = ({
  hit,
  onClick,
  selected,
}) => (
  <MenuItem
    component={Link}
    onClick={onClick}
    selected={selected}
    to={`/app/${hit.slug}`}
  >
    <Icon>
      <Img alt={`${hit.title} icon`} image={hit.icon} />
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
        <Category>
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
  </MenuItem>
)

export default SearchHit
