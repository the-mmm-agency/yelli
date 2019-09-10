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
}

export const useAppSubmissionForm = (): AppSubmissionForm => ({
  category: useInput(),
  description: useInput(''),
  icon: useFilePond(),
  screenshots: useFilePondMultiple(),
  slug: useInput(''),
  title: useInput(''),
})
