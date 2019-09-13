import { ComponentsProps } from '@material-ui/core/styles/props'

const props: ComponentsProps = {
  MuiTextField: {
    variant: 'outlined',
  },
  MuiTooltip: {
    disableTouchListener: true,
  },
  MuiTypography: {
    variantMapping: {
      subtitle1: 'span',
      subtitle2: 'span',
    },
  },
}

export default props
