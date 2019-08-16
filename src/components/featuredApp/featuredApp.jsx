import { CardActionArea } from '@material-ui/core'
import Img from 'components/img'
import Link from 'components/link'
import Typography from 'components/typography'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Card, Content } from './featuredApp.css'

const FeaturedApp = ({
  title,
  banner,
  description,
  slug,
}) => (
  <Card component="li">
    <CardActionArea component={Link} to={`/app/${slug}`}>
      <Img
        widthWebp
        alt="Featured app banner"
        fit="max"
        height={{ md: 175, xs: '42vw' }}
        image={banner}
        maxHeight={200}
        maxWidth={400}
        title={title}
      />
      <Content>
        <Typography fontWeight={600} variant="body1">
          {title}
        </Typography>
        <Typography
          gutterBottom
          color="textSecondary"
          fontWeight={600}
          variant="body2"
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
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
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
