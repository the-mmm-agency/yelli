import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  MenuItem,
  NoSsr,
  TextField,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import React from 'react'
import { registerPlugin } from 'react-filepond'

import {
  DialogContent,
  FilePond,
  Form,
  SubmitProgress,
} from './submitApp.css'

import Typography from 'src/elements/typography'
import { useAppSubmissionForm } from 'src/hooks/useAppSubmissionForm'
import { useCategories } from 'src/hooks/useCategories'

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageTransform,
  FilePondPluginImageCrop
)

type SubmitAppProps = {
  open: boolean
  onClose: () => void
}

const SubmitApp: React.FC<SubmitAppProps> = ({
  open,
  onClose,
}) => {
  const {
    icon,
    category,
    description,
    loading,
    slug,
    screenshots,
    title,
    onSubmit,
    url,
  } = useAppSubmissionForm(onClose)
  const categories = useCategories()
  const theme = useTheme()
  const fullscreen = useMediaQuery(
    theme.breakpoints.down('sm')
  )

  return (
    <NoSsr>
      <Dialog
        aria-labelledby="dialog-title"
        fullScreen={fullscreen}
        onClose={onClose}
        open={open}
      >
        <DialogTitle id="dialog-title">
          Submit your app
        </DialogTitle>
        <Form onSubmit={onSubmit}>
          <DialogContent dividers>
            <TextField
              {...title}
              required
              helperText="The title for your application"
              id="title"
              label="Title"
            />
            <TextField
              {...slug}
              required
              error={
                !slug.value.match(
                  /^[a-z0-9]+(?:-[a-z0-9]+)*$/
                )
              }
              helperText="The url friendly version of the application title. For example if you're adding Google Maps the slug would be google-maps"
              id="slug"
              label="Slug"
            />
            <TextField
              {...url}
              required
              helperText="A link to your application"
              id="url"
              label="Link"
              type="url"
            />
            <TextField
              {...category}
              required
              select
              helperText="The application category"
              label="Category"
            >
              {categories.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              {...description}
              multiline
              required
              helperText="A nice description for your application"
              id="description"
              label="Description"
              type="text"
            />
            <Typography
              color="textSecondary"
              component="label"
              id="icon-label"
              my={2}
              variant="h6"
            >
              Icon
            </Typography>
            <FilePond
              {...icon}
              required
              aria-labelledby="icon-label"
              id="icon"
              imageCropAspectRatio="1:1"
              name="data"
            />
            <Typography
              color="textSecondary"
              component="label"
              id="screenshots-label"
              my={2}
              variant="h6"
            >
              Screenshots
            </Typography>
            <FilePond
              {...screenshots}
              allowMultiple
              required
              aria-labelledby="screenshots-label"
              id="screenshots"
              imageCropAspectRatio="5:9"
              name="data"
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={onClose}>
              Close
            </Button>
            <Box position="relative">
              <Button color="secondary" disabled={loading}>
                Submit App
              </Button>
              {loading && (
                <SubmitProgress
                  color="secondary"
                  size={16}
                />
              )}
            </Box>
          </DialogActions>
        </Form>
      </Dialog>
    </NoSsr>
  )
}

export default SubmitApp
