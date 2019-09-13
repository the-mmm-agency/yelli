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
import { prop, sortBy } from 'ramda'
import React from 'react'
import { registerPlugin } from 'react-filepond'

import {
  DialogContent,
  FilePond,
  SubmitProgress,
} from './submitApp.css'

import Typography from 'src/elements/typography'
import { Category } from 'src/graphql-types'
import { useAppSubmissionForm } from 'src/hooks/useAppSubmissionForm'
import { useCategories } from 'src/hooks/useCategories'

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginImageTransform,
  FilePondPluginImageCrop
)

type Categories = Array<Omit<Category, 'applications'>>

const sortCategories = (
  categories: Categories
): Categories => sortBy(prop('name'))(categories)

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
        <DialogContent dividers>
          <TextField
            {...title}
            helperText="The title for your application"
            id="title"
            label="Title"
          />
          <TextField
            {...slug}
            helperText="The url friendly version of the application title. For example if you're adding Google Maps the slug would be google-maps"
            id="slug"
            label="Slug"
          />
          <TextField
            {...url}
            helperText="The url of your application"
            id="url"
            label="Url"
          />
          <TextField
            {...category}
            select
            helperText="The application category"
            label="Category"
          >
            {sortCategories(categories).map(
              ({ id, name }) => (
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              )
            )}
          </TextField>
          <TextField
            {...description}
            multiline
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
            <Button
              color="secondary"
              disabled={loading}
              onClick={onSubmit}
            >
              Submit App
            </Button>
            {loading && (
              <SubmitProgress color="secondary" size={16} />
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </NoSsr>
  )
}

export default SubmitApp
