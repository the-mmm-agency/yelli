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
  fragment FeaturedApp on GraphCool_Application {
    id
    title
    slug
    description
    banner {
      ...ImageBase
      imageFile {
        childImageSharp {
          fluid(
            maxWidth: 400
            srcSetBreakpoints: [300, 320, 350, 375, 400]
          ) {
            ...ImageFluid
          }
        }
      }
    }
  }
`

export default FeaturedApp
