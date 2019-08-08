import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  '@global': {
    '::selection': {
      background: theme.palette.primary.main,
      color: '#fff',
    },
    '::placeholder': {
      color: `${theme.palette.text.placeholder} !important`,
    },
    '@global .ScrollbarsCustom-Content': {
      display: 'flex',
      flexDirection: 'column',
    },
    '@global .ScrollbarsCustom-Thumb': {
      background: `${theme.palette.scrollbar.thumb} !important`,
      borderRadius: '0px !important',
    },
    '@global .ScrollbarsCustom-TrackX': {
      background: `${theme.palette.scrollbar.track} !important`,
      borderRadius: '0px !important',
      height: '8px !important',
    },
    '@global .ScrollbarsCustom-TrackY': {
      background: `${theme.palette.scrollbar.track} !important`,
      borderRadius: '0px !important',
      height: '100% !important',
      top: '0px !important',
      width: '12px !important',
    },
    body: {
      '-webkit-tap-highlight-color': 'transparent',
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      backgroundColor: theme.palette.background.default,
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        '-webkit-user-select': 'auto',
      },
      wordSpacing: theme.palette.type === 'dark' ? '.05em' : '0',
    },
    '*, *::before, *::after': {
      '@media: (prefers-reduced-motion: reduce)': {
        animation: 'none !important',
        transition: 'none !important',
      },
    },
  },
}))

const GlobalStyles = () => {
  useStyles()
  return <></>
}

export default GlobalStyles
