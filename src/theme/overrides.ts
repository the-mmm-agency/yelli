import { Overrides } from '@material-ui/core/styles/overrides'

const overrides: Overrides = {
  MuiAppBar: {
    root: {
      boxShadow: 'none !important',
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
  MuiDrawer: {
    paper: {
      zIndex: 1000,
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
}

export default overrides
