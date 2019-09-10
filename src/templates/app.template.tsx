import { OpenInNewOutlined as OpenIcon } from '@material-ui/icons'
import { graphql } from 'gatsby'
import React from 'react'

import {
  Divider,
  Icon,
  Screenshot,
  Screenshots,
} from './app.template.css'

import Favorite from 'src/components/favorite'
import SEO from 'src/components/seo'
import Button from 'src/elements/button'
import Flex from 'src/elements/flex'
import Typography from 'src/elements/typography'
import { ApplicationTemplateProps } from 'src/types'

const AppTemplate: React.FC<ApplicationTemplateProps> = ({
  data: {
    graphcool: {
      Application: {
        category,
        description,
        icon,
        screenshots,
        title,
        url,
      },
    },
  },
  pageContext: { id },
}) => (
  <>
    <SEO description={description} title={title} />
    <Flex flexDirection="column">
      <Flex pl={{ md: 2, xs: 1 }} pt={{ md: 2, xs: 1 }}>
        <Icon icon={icon} title={title} />
        <Flex flexDirection="column" mt={2} mx={1}>
          <Flex>
            <Typography component="h1" variant="h6">
              {title}
            </Typography>
            <Favorite id={id} />
          </Flex>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="h6"
          >
            {category.name}
          </Typography>
          <Button
            color="primary"
            href={url}
            mt="auto"
            size="small"
            variant="outlined"
          >
            <OpenIcon fontSize="inherit" />
            &nbsp; Launch App
          </Button>
        </Flex>
      </Flex>
      <Typography
        component="p"
        itemProp="description"
        maxWidth={{ md: 0.5, xs: 0.8 }}
        ml={{ sm: 5, xs: 4 }}
        my={{ sm: 3, xs: 2 }}
        variant="body1"
      >
        {description}
      </Typography>
      <Divider variant="fullWidth" />
      <Screenshots>
        {screenshots.map(({ id, ...screenshot }) => (
          <li key={id}>
            <Screenshot
              alt="Application Screenshot"
              image={screenshot}
              title={title}
            />
          </li>
        ))}
      </Screenshots>
    </Flex>
  </>
)

export const pageQuery = graphql`
  query ApplicationById($id: ID!) {
    graphcool {
      Application(id: $id) {
        title
        category {
          name
        }
        icon {
          ...AppIcon
        }
        screenshots {
          id
          url

          imageFile {
            childImageSharp {
              fluid(
                maxWidth: 480
                srcSetBreakpoints: [200, 360, 480]
              ) {
                ...ImageFluid
              }
            }
          }
        }

        description
      }
    }
  }
`

export default AppTemplate
