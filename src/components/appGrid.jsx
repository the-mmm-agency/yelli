import { Grid as MuiGrid, Typography } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import { theme } from 'styled-tools'
import styled from '@emotion/styled'

import AppComponent from 'components/appComponent'
import { spacing } from 'util/theme'

const Name = styled(Typography)`
  border-bottom: 1px solid ${theme('palette.divider')};
  padding: ${spacing(2)} ${spacing(4)};
  font-weight: 500;
  flex-grow: 1;
`

const Grid = styled(MuiGrid)`
  &::after {
    content: '';
    flex: 2 0 auto;
  }
  flex-wrap: wrap;
  padding: ${spacing(3)} ${spacing(4)};
  list-style: none;
`

const AppGrid = ({ name, apps }) => (
  <>
    <Name component="h1" variant="h5">
      {name}
    </Name>
    <Grid component="ul" container justify="space-between" spacing={4}>
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
