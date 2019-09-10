import styled from 'src/util/styled'
import { spacing } from 'src/util/theme'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > div {
    margin: ${spacing(2, 1)};
  }
`
