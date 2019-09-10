import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { useCurrentUserId } from './useCurrentUserId'
import {
  FilePond,
  FilePondMultiple,
  useFilePond,
  useFilePondMultiple,
} from './useFilePond'
import { InputItem, useInput } from './useInput'

type AppSubmissionForm = {
  category: InputItem
  description: InputItem
  slug: InputItem
  title: InputItem
  icon: FilePond
  screenshots: FilePondMultiple
  url: InputItem
  onSubmit: () => void
}

const CREATE_APP = gql`
  mutation createApp(
    $author: ID!
    $category: ID!
    $description: String!
    $icon: ID!
    $screenshots: [ID!]
    $slug: String!
    $title: String!
  ) {
    createApplication(
      authorId: $author
      categoryId: $category
      description: $description
      iconId: $icon
      screenshotsIds: $screenshots
      slug: $slug
      title: $title
    ) {
      id
    }
  }
`

export const useAppSubmissionForm = (): AppSubmissionForm => {
  const { userId } = useCurrentUserId()
  const [createApp] = useMutation(CREATE_APP)

  const category = useInput()
  const description = useInput('')
  const icon = useFilePond()
  const screenshots = useFilePondMultiple()
  const slug = useInput('')
  const title = useInput('')
  const url = useInput('')

  const onSubmit = (): void => {
    createApp({
      variables: {
        author: userId,
        category: category.value,
        description: description.value,
        icon: icon.id,
        screenshots: screenshots.ids,
        slug: slug.value,
        title: title.value,
        url: url.value,
      },
    })
  }

  return {
    category,
    description,
    icon,
    onSubmit,
    screenshots,
    slug,
    title,
    url,
  }
}
