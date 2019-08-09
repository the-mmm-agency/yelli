import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button as MuiButton, Typography } from '@material-ui/core'
import styled from '@emotion/styled'

import Link from 'components/link'
import HorizontalScroll from 'components/horizontalScroll'
import { spacing } from 'util/theme'

const Button = styled(MuiButton)`
  font-weight: 600;
  margin-left: auto;
  margin-right: ${spacing(3)};
  text-transform: capitalize;
`

const HomeSection = ({ title, link, apps, AppComponent }) => (
  <Box pt={2} pb={1} width={1}>
    <Box display="flex" pl={4}>
      <Typography gutterBottom variant="h6">
        {title}
      </Typography>
      {link && (
        <Button
          color="primary"
          size="small"
          variant="text"
          component={Link}
          to={link}
        >
          Show More
        </Button>
      )}
    </Box>
    <HorizontalScroll>
      {apps.map(({ id, ...app }) => (
        <AppComponent key={id} {...app} />
      ))}
    </HorizontalScroll>
  </Box>
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
