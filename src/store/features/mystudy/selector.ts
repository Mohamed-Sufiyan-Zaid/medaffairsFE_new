import { createSelector } from 'reselect'

export default (slice: any) => ({
  getCurrentStudy: createSelector(
    (state: any) => state[slice.name],
    (data: any) => data.currentStudy,
  ),
  getTopStudies: createSelector(
    (state: any) => state[slice.name],
    (data: any) => data.topStudies,
  ),
  getMyStudies: createSelector(
    (state: any) => state[slice.name],
    (data: any) => data.myStudies,
  ),
  getStudiesActiveColumns: createSelector(
    (state: any) => state[slice.name],
    (data: any) => data.studyActiveColumn,
  ),
  getMyStudiesCount: createSelector(
    (state: any) => state[slice.name],
    (data: any) => data.myStudiesCount,
  ),
})
