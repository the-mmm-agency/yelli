import { Divider } from '@material-ui/core'
import { graphql } from 'gatsby'
import React from 'react'

import FeaturedApplication from 'components/featuredApp'
import Flex from 'components/flex'
import Application from 'components/application'
import HomeSection from 'components/homeSection'
import SEO from 'components/seo'

const Home = ({ data: { latest, top, featured } }) => (
  <>
    <SEO title="Home" />
    <Flex flexDirection="column" pt={1}>
      <HomeSection
        title="Featured Apps"
        apps={featured.applications}
        AppComponent={FeaturedApplication}
      />
      <Divider variant="fullWidth" />
      <HomeSection
        title="Top Apps"
        link="/top-apps"
        apps={top.applications}
        AppComponent={Application}
      />
      <Divider variant="fullWidth" />
      <HomeSection
        title="New Apps"
        link="/new"
        apps={latest.applications}
        AppComponent={Application}
      />
    </Flex>
  </>
)

export const query = graphql`
  query homePage {
    featured: graphcms {
      applications(where: { featured: true }) {
        ...FeaturedApp
      }
    }
    latest: graphcms {
      applications(first: 15, orderBy: createdAt_DESC) {
        ...Application
      }
    }
    top: graphcms {
      applications(first: 15, orderBy: rank_ASC) {
        ...Application
      }
    }
  }
`

export default Home
