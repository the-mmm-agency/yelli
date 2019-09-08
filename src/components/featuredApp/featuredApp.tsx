import { CardActionArea } from '@material-ui/core'
import { graphql, navigate } from 'gatsby'
import React from 'react'

import { Banner, Card, Content } from './featuredApp.css'

import Typography from 'src/elements/typography'
import { FeaturedAppProps } from 'src/types'

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
      <Banner
        alt="Featured app banner"
        fluid={{
          args: {
            maxWidth: 400,
          },
          image: banner,
        }}
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
      ...Image
    }
  }
`

export default FeaturedApp
