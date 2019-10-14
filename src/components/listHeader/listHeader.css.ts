import { Typography } from '@material-ui/core'
import { pipe } from 'fp-ts/lib/pipeable'
import { oc } from 'ts-optchain'

import styled from 'src/util/styled'
import {
  borders,
  palette,
  spacing,
  transitions,
} from 'src/util/theme'

const ListHeader = styled(Typography).attrs(props =>
  pipe(
    oc(props),
    ({ component, variant }) => ({
      component: component('h1'),
      variant: variant('h5'),
    })
  )
)`
  padding: ${spacing(2)};
  background-color: ${palette('background.paper')};
  border-bottom: ${borders('standard')};
  ${transitions('background-color')};
`

export default ListHeader
