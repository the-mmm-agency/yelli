import loadable from '@loadable/component'

const Loadable = loadable(() => import('./favorite'))

export default Loadable
