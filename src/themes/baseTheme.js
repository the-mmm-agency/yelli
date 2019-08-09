const BaseTheme = {
  shape: {
    borderRadius: 8,
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
    overrides: {
      MuiListItemText: {
        inset: {
          paddingLeft: 16,
        },
      },
    },
    subtitle1: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
}

export default BaseTheme
