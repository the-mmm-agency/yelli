import { Typography } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import AppComponent from 'components/appComponent'
import Flex from 'components/flex'
import { spacing } from 'util/theme'

const Name = styled(Typography)`
  border-bottom: 1px solid ${theme('palette.divider')};
  padding: ${spacing(2)} ${spacing(4)};
  font-weight: 500;
  flex-grow: 1;
`

const Grid = styled(Flex)`
  &::after {
    content: '';
    flex: 2 0 auto;
  }
`

const AppGrid = ({ name, apps }) => (
  <>
    <Name component="h1" variant="h5">
      {name}
    </Name>
    <Grid as="ul" px={2} flexWrap="wrap" justifyContent="space-between">
      {apps.map(app => (
        <AppComponent key={app.id} {...app} />
      ))}
    </Grid>
  </>
)

AppGrid.propTypes = {
  apps: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
}

export default AppGrid
