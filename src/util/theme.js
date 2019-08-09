export const transitions = value => props =>
  props.theme.transitions.create(value)
export const spacing = value => props => `${props.theme.spacing(value)}px`
export const up = value => props => props.theme.breakpoints.up(value)
export const down = value => props => props.theme.breakpoints.down(value)
export const between = (lower, upper) => props =>
  props.theme.breakpoints.between(lower, upper)
