import { path } from 'ramda'
import { split } from 'ramda'
import { useWith } from 'ramda'

const dotPath = useWith(path, [split('.')])

export default dotPath
