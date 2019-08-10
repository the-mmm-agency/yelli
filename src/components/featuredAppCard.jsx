import { Card, CardActionArea, CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'graphcms-image'
import React from 'react'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import Link from 'components/link'
import Typography from 'components/typography'
import { down, spacing, transitions } from 'util/theme'

const Banner = styled(Img)`
  ${down('sm')} {
    height: 42vw;
    max-height: 200px;
  }
  height: 175px;
  width: 100%;
`

const Content = styled(CardContent)`
  padding: ${spacing(2)} ${spacing(2)} ${spacing(1)};
`

const Root = styled(Card)`
  &:hover {
    background-color: ${theme('palette.background.paper')};
    background-size: auto 105%;
    border-color: transparent;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
  ${down('sm')} {
    width: calc(100% - 32px);
    min-width: 300px;
    max-width: 400px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  background-color: ${theme('palette.background.default')};
  border: 1px solid ${theme('palette.divider')};
  margin: ${spacing(2)};
  margin-right: ${spacing(1)};
  min-width: 350px;
  max-width: 375px;
  width: calc(100% / 3 - 32px);
  scroll-snap-align: start;
  transition: ${transitions(
    ['border-color', 'opacity', 'box-shadow', 'background-size', 'transform'],
    {
      duration: theme('transitions.duration.standard'),
      easing: theme('transitions.easing.easeInOut'),
    }
  )};
`

const FeaturedAppCard = ({ title, banner, description, slug }) => (
  <Root component="li">
    <CardActionArea component={Link} to={`/app/${slug}`}>
      <Banner
        alt="Application Banner"
        image={banner}
        fit="max"
        maxWidth={400}
        title={title}
        widthWebp
      />
      <Content>
        <Typography fontWeight={500} noWrap variant="body1">
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          fontSize="0.7rem"
          fontWeight={600}
          gutterBottom
          noWrap
        >
          {description}
        </Typography>
      </Content>
    </CardActionArea>
  </Root>
)

FeaturedAppCard.propTypes = {
  banner: PropTypes.shape({
    handle: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export const query = graphql`
  fragment FeaturedAppCard on GraphCMS_Application {
    id
    title
    slug
    description
    banner {
      handle
      width
      height
    }
  }
`

export default FeaturedAppCard
