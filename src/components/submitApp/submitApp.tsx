import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'
import { MenuItem, TextField } from '@material-ui/core'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { prop, sortBy } from 'ramda'
import React from 'react'
import { FilePond, registerPlugin } from 'react-filepond'

import { Form } from './submitApp.css'

import Typography from 'src/elements/typography'
import { Category } from 'src/graphql-types'
import { useAppSubmissionForm } from 'src/hooks/useAppSubmissionForm'
import { useCategories } from 'src/hooks/useCategories'

registerPlugin(FilePondPluginImagePreview)

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
  } = useAppSubmissionForm()
  const categories = useCategories()
  return (
    <Form>
      <Typography component="h2" m={2} variant="h6">
        Icon
      </Typography>
      <FilePond {...icon} />
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
        type="text"
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
          <MenuItem key={id} value={name}>
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
      <FilePond {...screenshots} allowMultiple />
    </Form>
  )
}

export default SubmitApp
