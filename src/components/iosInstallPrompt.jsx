import React from 'react'
import { Modal, Paper, SvgIcon, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { dispatch, useGlobalState } from 'state'

const close = () => dispatch({ type: 'closeInstallPrompt' })

const useStyles = makeStyles(theme => ({
  content: {
    padding: '10px 35px',
  },
  guideIcon: {
    margin: '0 2px -6px',
    width: 20,
  },
  icon: {
    border: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1,
    },
    borderRadius: 12,
    display: 'block',
    margin: '0 auto',
    width: 60,
  },
  iconContainer: {
    background:
      'url(\'data:image/svg+xml,%3Csvg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath fill="%23F0F0F0" d="M65,17C65,10.377 59.623,5 53,5L17,5C10.377,5 5,10.377 5,17L5,53C5,59.623 10.377,65 17,65L53,65C59.623,65 65,59.623 65,53L65,17Z" /%3E%3C/svg%3E%0A\') center center / 70px 70px repeat-x',
    margin: '40px 0 0',
  },
  paper: {
    margin: 'auto',
    maxWidth: 450,
    minWidth: 350,
    outline: 'none',
    padding: theme.spacing(4),
    width: '30%',
  },
  root: {
    display: 'flex',
  },
}))

const IosInstallPrompt = () => {
  const classes = useStyles()
  const [isOpen] = useGlobalState('installPrompt')
  return (
    <Modal classes={{ root: classes.root }} onClose={close} open={isOpen}>
      <Paper className={classes.paper}>
        <div className={classes.iconContainer}>
          <img
            alt="Yelli"
            className={classes.icon}
            src="/icons/apple-touch-icon.png"
          />
        </div>
        <div className={classes.content}>
          <Typography align="center" variant="h6">
            Install Yelli
          </Typography>
          <Typography align="center" variant="body1">
            Install this application on your home screen for quick and easy
            access when you’re on the go.
          </Typography>
          <Typography align="center" variant="body2">
            Just tap
            <SvgIcon
              className={classes.guideIcon}
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Share</title>
              <path
                d="M48.883,22.992L61.146,10.677L61.146,78.282C61.146,80.005 62.285,81.149 64,81.149C65.715,81.149 66.854,80.005 66.854,78.282L66.854,10.677L79.117,22.992C79.693,23.57 80.256,23.853 81.114,23.853C81.971,23.853 82.534,23.57 83.11,22.992C84.25,21.848 84.25,20.125 83.11,18.981L65.997,1.794C65.715,1.511 65.421,1.215 65.139,1.215C64.563,0.932 63.718,0.932 62.861,1.215C62.579,1.498 62.285,1.498 62.003,1.794L44.89,18.981C43.75,20.125 43.75,21.848 44.89,22.992C46.029,24.149 47.744,24.149 48.883,22.992ZM103.936,35.32L81.114,35.32L81.114,41.053L103.936,41.053L103.936,121.27L24.064,121.27L24.064,41.053L46.886,41.053L46.886,35.32L24.064,35.32C20.928,35.32 18.355,37.904 18.355,41.053L18.355,121.27C18.355,124.419 20.928,127.003 24.064,127.003L103.936,127.003C107.072,127.003 109.645,124.419 109.645,121.27L109.645,41.053C109.645,37.891 107.072,35.32 103.936,35.32Z"
                fill="#007AFF"
              />
            </SvgIcon>
            then “Add to Home Screen”
          </Typography>
        </div>
      </Paper>
    </Modal>
  )
}

export default IosInstallPrompt
