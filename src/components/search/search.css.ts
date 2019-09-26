import styled from 'src/util/styled'
import { down } from 'src/util/theme'

export const Root = styled.div`
  position: relative;
  display: flex;
  margin-right: auto;
  ${down('sm')} {
    flex-grow: 1;
  }
`
