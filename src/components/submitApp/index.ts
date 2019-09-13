import loadable from '@loadable/component'

const Loadable = loadable(() => import('./submitApp'))

export default Loadable
