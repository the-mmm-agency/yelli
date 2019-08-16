import { theme } from 'styled-tools'

const BaseTheme = {
  borders: {
    standard: props =>
      `1px solid ${theme('palette.divider')(props)}`,
  },
  overrides: {
    MuiCard: {
      root: {
        boxShadow: 'none',
        background: 'transparent',
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
    },
    MuiList: {
      root: {
        width: '100%',
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
    MuiListItemText: {
      inset: {
        paddingLeft: 16,
      },
    },
  },
  shape: {
    borderRadius: '8px',
  },
  sizes: {
    sideDrawer: '240px',
  },
  typography: {
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
    button: {
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
    body1: {
      letterSpacing: '0.02em',
    },
    body2: {
      letterSpacing: '0.018em',
    },
    subtitle1: {
      letterSpacing: '0.02em',
      fontWeight: 500,
    },
    h5: {
      letterSpacing: '0.035em',
    },
    h6: {
      letterSpacing: '0.03em',
      fontWeight: 500,
    },
  },
}

export default BaseTheme
