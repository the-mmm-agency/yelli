import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from '@material-ui/core'

import Flex from 'components/flex'
import Link from 'components/link'
import HorizontalScroll from 'components/horizontalScroll'

const HomeSection = ({ title, link, apps, AppComponent }) => (
  <Flex flexDirection="column" pt={2} pb={1} width={1}>
    <Flex pl={3} pr={{ xs: 1, md: 2 }} justifyContent="space-between">
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      {link && (
        <Button
          component={Link}
          color="primary"
          size="small"
          to={link}
          variant="text"
        >
          Show More
        </Button>
      )}
    </Flex>
    <HorizontalScroll>
      {apps.map(({ id, ...app }) => (
        <AppComponent key={id} {...app} />
      ))}
    </HorizontalScroll>
  </Flex>
)

HomeSection.defaultProps = {
  link: null,
}

HomeSection.propTypes = {
  AppComponent: PropTypes.func.isRequired,
  apps: PropTypes.array.isRequired,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default HomeSection
