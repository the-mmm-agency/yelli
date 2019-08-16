import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { CardActionArea } from '@material-ui/core'
import React from 'react'

import { Card, Content } from './featuredApp.css'

import Link from 'components/link'
import Img from 'components/img'
import Typography from 'components/typography'

const FeaturedApp = ({
  title,
  banner,
  description,
  slug,
}) => (
  <Card component="li">
    <CardActionArea component={Link} to={`/app/${slug}`}>
      <Img
        alt="Featured app banner"
        image={banner}
        fit="max"
        maxWidth={400}
        height={{ xs: '42vw', md: 175 }}
        maxHeight={200}
        title={title}
        widthWebp
      />
      <Content>
        <Typography fontWeight={600} variant="body1">
          {title}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          fontWeight={600}
          gutterBottom
        >
          {description}
        </Typography>
      </Content>
    </CardActionArea>
  </Card>
)

FeaturedApp.propTypes = {
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
  fragment FeaturedApp on GraphCMS_Application {
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

export default FeaturedApp
