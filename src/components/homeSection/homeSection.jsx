import { Button, Typography } from '@material-ui/core'
import Flex from 'components/flex'
import HorizontalScroll from 'components/horizontalScroll'
import Link from 'components/link'
import PropTypes from 'prop-types'
import React from 'react'

const HomeSection = ({
  title,
  link,
  apps,
  AppComponent,
}) => (
  <Flex flexDirection="column" pb={1} pt={2} width={1}>
    <Flex
      justifyContent="space-between"
      pl={3}
      pr={{ md: 2, xs: 1 }}
    >
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      {link && (
        <Button
          aria-label="Show more"
          color="primary"
          component={Link}
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
