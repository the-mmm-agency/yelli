import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { CardActionArea } from '@material-ui/core'
import React from 'react'

import { Card, Content, Banner } from './featuredAppCard.css'

import Link from 'components/link'
import Typography from 'components/typography'

const FeaturedAppCard = ({ title, banner, description, slug }) => (
  <Card component="li">
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
        <Typography fontWeight={600} noWrap variant="body1">
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          fontWeight={600}
          gutterBottom
          noWrap
        >
          {description}
        </Typography>
      </Content>
    </CardActionArea>
  </Card>
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
