import { createSelector } from 'reselect'

export default (slice: any) => ({
  getTools: createSelector(
    (state: any) => state[slice.name],
    (data) => data,
  ),
})
