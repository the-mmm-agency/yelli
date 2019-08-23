import { Borders } from '@material-ui/core/styles/createMuiTheme'
import { ThemeProp } from 'types'

import { palette } from 'util/theme'

const borders: Borders = {
  standard: (props: ThemeProp): string =>
    `1px solid ${palette('divider')(props)}`,
}

export default borders
