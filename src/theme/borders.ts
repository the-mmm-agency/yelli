import { Borders } from '@material-ui/core/styles/createMuiTheme'

import { ThemeProp } from 'src/types'
import { palette } from 'src/util/theme'

const borders: Borders = {
  standard: (props: ThemeProp): string =>
    `1px solid ${palette('divider')(props)}`,
}

export default borders
