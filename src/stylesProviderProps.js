import { jssPreset } from '@material-ui/styles'
import { create } from 'jss'
import expand from 'jss-plugin-expand'

const stylesProviderProps = {
  jss: create({
    ...jssPreset(),
    plugins: [
      ...jssPreset().plugins,
      expand(),
    ],
    insertionPoint: 'mui-inject-first',
  }),
}

export default stylesProviderProps
