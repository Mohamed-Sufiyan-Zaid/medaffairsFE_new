import { createSelector } from 'reselect'

export default (slice: any) => ({
  getCountValue: createSelector(
    (state: any) => state[slice.name],
    (data) => data,
  ),
})
