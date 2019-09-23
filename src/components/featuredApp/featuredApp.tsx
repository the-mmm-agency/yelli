import { CardActionArea } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import { Banner, Card, Content } from './featuredApp.css'

import Link from 'src/elements/link'
import Typography from 'src/elements/typography'
import { FeaturedAppProps } from 'src/types'

const FeaturedApp: React.FC<FeaturedAppProps> = ({
  title,
  banner,
  description,
  slug,
}) => (
  <Card as="li">
    <CardActionArea
      component={Link}
      role="link"
      to={`/app/${slug}`}
    >
      <Banner
        alt="Featured app banner"
        image={banner}
        title={title}
      />
      <Content>
        <Typography variant="body1">{title}</Typography>
        <Typography
          gutterBottom
          color="textSecondary"
          variant="body2"
        >
          {description}
        </Typography>
      </Content>
    </CardActionArea>
  </Card>
)

export const query = graphql`
  fragment FeaturedApp on Yelli_Application {
    id
    title
    slug
    description
    banner {
      fluid(
        sizes: "(max-width: 960px) 30vw, 100vw"
        srcSetBreakpoints: [300, 320, 350, 375, 400]
      ) {
        ...Fluid
      }
    }
  }
`

export default FeaturedApp
