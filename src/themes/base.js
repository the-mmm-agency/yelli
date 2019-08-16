import {
  darken,
  lighten,
} from '@material-ui/core/styles/colorManipulator'
import { theme } from 'styled-tools'

const base = {
  borders: {
    standard: props =>
      `1px solid ${theme('palette.divider')(props)}`,
  },
  contrastThreshold: 3,
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiBottomNavigation: {
      root: {
        height: 68,
      },
    },
    MuiBottomNavigationAction: {
      label: {
        fontWeight: 600,
      },
    },
    MuiButton: {
      outlined: {
        borderRadius: 4,
        textTransform: 'capitalize',
      },
    },
    MuiCard: {
      root: {
        background: 'transparent',
        boxShadow: 'none',
      },
    },
    MuiList: {
      root: {
        width: '100%',
      },
    },
    MuiListItemText: {
      inset: {
        paddingLeft: 16,
      },
    },
  },
  palette: {
    primary: {
      dark: darken('#ff5370', 0.12),
      light: lighten('#ff5370', 0.12),
      main: '#ff5370',
    },
    secondary: {
      dark: lighten('#89ddff', 0.12),
      light: lighten('#89ddff', 0.12),
      main: '#89ddff',
    },
    tonalOffset: 0.2,
  },
  radii: {
    image: '15px',
  },
  shape: {
    borderRadius: '8px',
  },
  sizes: {
    sideDrawer: '240px',
  },
  typography: {
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
    fontSize: 14,
    h5: {
      letterSpacing: '0.035em',
    },
    h6: {
      fontWeight: 500,
      letterSpacing: '0.03em',
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: '0.02em',
    },
  },
}

export default base
