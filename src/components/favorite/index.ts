import loadable from '@loadable/component'

const Loadable = loadable(() => import('./favorite'))

export { default as action } from './favorite.action'
export default Loadable
