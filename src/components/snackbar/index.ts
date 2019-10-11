import loadable from '@loadable/component'

const Loadable = loadable(() => import('./snackbar'))

export default Loadable
