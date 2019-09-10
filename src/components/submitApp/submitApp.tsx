import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'
import {
  Button,
  MenuItem,
  TextField,
} from '@material-ui/core'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import { prop, sortBy } from 'ramda'
import React from 'react'
import { registerPlugin } from 'react-filepond'

import { FilePond, Form } from './submitApp.css'

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

const SubmitApp: React.FC = () => {
  const {
    icon,
    category,
    description,
    slug,
    screenshots,
    title,
    onSubmit,
    url,
  } = useAppSubmissionForm()
  const categories = useCategories()
  return (
    <Form>
      <Typography component="h2" m={2} variant="h6">
        Icon
      </Typography>
      <FilePond
        {...icon}
        imageCropAspectRatio="1:1"
        name="data"
      />
      <TextField
        {...title}
        helperText="The title for your application"
        id="title"
        label="Title"
        variant="outlined"
      />
      <TextField
        {...slug}
        helperText="The url friendly version of the application title. For example if you're adding Google Maps the slug would be google-maps"
        id="slug"
        label="Slug"
        variant="outlined"
      />
      <TextField
        {...url}
        helperText="The url of your application"
        id="url"
        label="Url"
        variant="outlined"
      />
      <TextField
        {...category}
        select
        helperText="The application category"
        label="Category"
        variant="outlined"
      >
        {sortCategories(categories).map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        {...description}
        multiline
        helperText="A nice description for your application"
        id="description"
        label="Description"
        type="text"
        variant="outlined"
      />
      <Typography component="h2" m={2} variant="h6">
        Screenshots
      </Typography>
      <FilePond
        {...screenshots}
        allowMultiple
        imageCropAspectRatio="5:9"
        name="data"
      />
      <Button
        fullWidth
        color="primary"
        onClick={onSubmit}
      />
    </Form>
  )
}

export default SubmitApp
