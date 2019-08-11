import { Card, CardActionArea, CardContent } from '@material-ui/core'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'graphcms-image'
import React from 'react'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import Link from 'components/link'
import Typography from 'components/typography'
import { up, spacing } from 'util/theme'

const Banner = styled(Img)`
  ${up('md')} {
    height: 175px;
    width: 100%;
  }
  height: 42vw;
  max-height: 200px;
`

const Content = styled(CardContent)`
  padding: ${spacing(2)} ${spacing(2)} ${spacing(1)};
`

const Root = styled(Card)`
  ${up('md')} {
    min-width: 350px;
    max-width: 375px;
    width: calc(100% / 3 - 32px);
  }
  background-color: ${theme('palette.background.default')};
  border: 1px solid ${theme('palette.divider')};
  margin: ${spacing(2)} ${spacing(1)};
  flex: 0 0 auto;
  min-width: 300px;
  max-width: 400px;
  width: calc(100% - 32px);
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
