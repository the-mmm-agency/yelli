import {
  CircularProgress,
  DialogContent as MuiDialogContent,
} from '@material-ui/core'
import { FilePond as FilePondBase } from 'react-filepond'

import styled from 'src/util/styled'
import { borders, palette, spacing } from 'src/util/theme'

export const DialogContent = styled(MuiDialogContent)`
  display: flex;
  flex-direction: column;
  .MuiFormControl-root {
    width: 100%;
    margin: ${spacing(1.5, 1)};
    .MuiFormHelperText-contained {
      margin: 8px 0 0;
      color: ${palette('text.alt')};
      font-weight: 500;
      font-size: 0.875rem;
      line-height: inherit;
    }
  }
`

export const FilePond = styled(FilePondBase)`
  .filepond--root {
    font: inherit;
    font-size: 1rem;
  }
  .filepond--drop-label {
    color: ${palette('text.secondary')};
  }
  .filepond--label-action {
    color: ${palette('primary.main')};
    text-decoration-color: ${palette('primary.main')};
  }
  .filepond--browser.filepond--browser {
    z-index: 9999;
    height: 100%;
  }
  .filepond--panel-root {
    background-color: ${palette('background.darker')};
  }
  .filepond--image-preview-wrapper {
    border: ${borders('standard')};
    transform: scale(1.02);
  }
  .filepond--image-preview {
    background: ${palette('background.darkest')};
  }
  .filepond--image-preview-overlay {
    display: none;
  }
`

export const SubmitProgress = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  margin-top: ${spacing(-1)};
  margin-left: ${spacing(-1)};
`
