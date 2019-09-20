import { Divider } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import Application from 'src/components/application'
import FeaturedApplication from 'src/components/featuredApp'
import HomeSection from 'src/components/homeSection'
import SEO from 'src/components/seo'
import Flex from 'src/elements/flex'
import { AppList, FeaturedAppList } from 'src/types'

type HomeProps = {
  data: {
    featured: FeaturedAppList
    top: AppList
    latest: AppList
  }
}

const Home: React.FC<HomeProps> = ({
  data: { featured, top, latest },
}) => (
  <>
    <SEO title="Home" />
    <Flex flexDirection="column" pt={1}>
      <HomeSection
        AppComponent={FeaturedApplication}
        apps={featured.applications}
        title="Featured Apps"
      />
      <Divider variant="fullWidth" />
      <HomeSection
        AppComponent={Application}
        apps={top.applications}
        link="/top-apps"
        title="Top Apps"
      />
      <Divider variant="fullWidth" />
      <HomeSection
        AppComponent={Application}
        apps={latest.applications}
        link="/new"
        title="New Apps"
      />
    </Flex>
  </>
)

export const query = graphql`
  {
    featured: graphcool {
      applications(
        where: {
          featured: { equals: true }
          published: { equals: true }
        }
      ) {
        ...FeaturedApp
      }
    }
    latest: graphcool {
      applications(
        first: 15
        orderBy: { createdAt: asc }
        where: { published: { equals: true } }
      ) {
        ...Application
      }
    }
    top: graphcool {
      applications(
        first: 15
        orderBy: { rank: asc }
        where: { published: { equals: true } }
      ) {
        ...Application
      }
    }
  }
`

export default Home
