import { Divider } from '@material-ui/core'
import Application from 'components/application'
import FeaturedApplication from 'components/featuredApp'
import Flex from 'components/flex'
import HomeSection from 'components/homeSection'
import SEO from 'components/seo'
import { graphql } from 'gatsby'
import React from 'react'

const Home = ({ data: { latest, top, featured } }) => (
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
