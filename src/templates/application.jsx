import {
  Divider as MuiDivider,
  Grid,
  Typography,
  Button,
} from '@material-ui/core'
import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons'
import { graphql } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { theme } from 'styled-tools'
import Img from 'graphcms-image'

import HorizontalScroll from 'components/horizontalScroll'
import SEO from 'components/seo'
import { spacing, down } from 'util/theme'

const Divider = styled(MuiDivider)`
  min-width: 100vw;
  margin-left: ${spacing(-3)};
  margin-bottom: ${spacing(2)};
`

const Description = styled(Typography)`
  ${down('sm')} {
    max-width: 80%;
  }
  margin-left: ${spacing(3)};
  margin-top: ${spacing(1)};
  margin-bottom: ${spacing(3)};
  max-width: 50%;
`

const Icon = styled(Img)`
  flex-grow: 1;
  margin: ${spacing(2)} ${spacing(2)} 0;
  height: ${spacing(14)};
  width: ${spacing(14)};
  img {
    border-radius: 15px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1));
  }
`

const Info = styled(Grid)`
  ${down('sm')} {
    padding: ${spacing(1)} 0 ${spacing(1)} 0;
  }
  height: ${spacing(20)};
  padding: ${spacing(2)} 0 ${spacing(2)} 0;
  flex-basis: ${spacing(16)};
`

const Meta = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin: ${spacing(2)} ${spacing(1)} ${spacing(1)};
`

const Screenshot = styled(Img)`
  border: 1px solid ${theme('palette.divider')};
  border-radius: 15px;
  flex-shrink: 0;
  height: 45vw;
  margin-right: ${spacing(2)};
  margin-bottom: ${spacing(3)};
  overflow: hidden;
  scroll-snap-align: start;
  width: 25vw;
  ${down('sm')} {
    height: 355px;
    width: 200px;
  }
`

const Application = ({
  data: {
    graphcms: {
      application: { category, description, icon, screenshots, title, url },
    },
  },
}) => (
  <>
    <SEO title={title} description={description} />
    <Grid
      container
      direction="column"
      itemScope
      itemType="https://schema.org/MobileApplication"
    >
      <Info item container direction="row">
        <Icon
          alt="Application Icon"
          title={title}
          fadeIn={false}
          itemprop="image"
          withWebp
          image={icon}
        />
        <Meta xs="auto" item>
          <Typography component="h1" itemProp="name" variant="h6">
            {title}
          </Typography>
          <Typography
            color="textSecondary"
            itemProp="applicationCategory"
            component="h2"
            gutterBottom
            variant="h6"
          >
            {category.name}
          </Typography>
          <Button
            css={css`
              border-radius: 4px;
              margin-top: auto;
            `}
            color="primary"
            itemProp="installUrl"
            href={url}
            size="small"
            target="_blank"
            variant="outlined"
          >
            <OpenIcon fontSize="inherit" />
            &nbsp; Launch App
          </Button>
          <link itemProp="installUrl" href={url} />
        </Meta>
      </Info>
      <Description itemProp="description" variant="body1" component="p">
        {description}
      </Description>
      <Divider />
      <HorizontalScroll>
        {screenshots.map(screenshot => (
          <Screenshot
            key={screenshot.handle}
            alt="Application Screenshot"
            itemProp="screenshot"
            title={title}
            fit="scale"
            image={screenshot}
            withWebp
          />
        ))}
      </HorizontalScroll>
    </Grid>
  </>
)

export const pageQuery = graphql`
  query ApplicationById($id: ID!) {
    graphcms {
      application(where: { id: $id }) {
        title
        category {
          name
        }
        icon {
          handle
          width
          height
        }
        description
        screenshots {
          handle
          width
          height
        }
        url
      }
    }
  }
`

export default Application
