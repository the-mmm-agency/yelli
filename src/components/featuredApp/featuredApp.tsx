import { CardActionArea } from '@material-ui/core'
import Img from 'components/img'
import Typography from 'components/typography'
import { graphql } from 'gatsby'
import React from 'react'
import { navigate } from 'gatsby'

import { Card, Content } from './featuredApp.css'
import { FeaturedAppProps } from 'types'

const FeaturedApp: React.FC<FeaturedAppProps> = ({
  title,
  banner,
  description,
  slug,
}) => (
  <Card>
    <CardActionArea
      onClick={() => {
        navigate(`/app/${slug}`)
      }}
    >
      <Img
        withWebp
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
