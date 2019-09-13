import { TypographyOptions } from '@material-ui/core/styles/createTypography'

const typography: TypographyOptions = {
  body1: {
    letterSpacing: '0.02em',
  },
  body2: {
    letterSpacing: '0.018em',
  },
  button: {
    fontWeight: 600,
    letterSpacing: '0.05em',
  },
  fontFamily: [
    'proxima-nova',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Arial',
    'sans-serif',
  ].join(','),
  h1: {
    fontWeight: 400,
  },
  h2: {
    fontWeight: 400,
  },
  h5: {
    letterSpacing: '0.035em',
  },
  h6: {
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
  overline: {
    fontWeight: 700,
  },
  subtitle1: {
    fontWeight: 500,
    letterSpacing: '0.02em',
  },
}

export default typography
