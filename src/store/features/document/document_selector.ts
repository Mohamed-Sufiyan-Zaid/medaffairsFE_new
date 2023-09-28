import { createSelector } from 'reselect'

export default (slice: any) => ({
  getDocuments: createSelector(
    (state: any) => state[slice.name],
    (data: any) => {
      let localData: any = data.documents
      if (localData.searchBy !== '') {
        localData = localData.filter((item: any) => item.title.search(data.searchBy) !== -1);
      }
      if (data.sortBy !== 'date') {
        localData = localData.sort((a: any, b: any) => {
          return a[data.sortBy] - b[data.sortBy];
        })
      }
      return localData;
    },
  ),
  getSortBy: createSelector(
    (state: any) => state[slice.name],
    (data: any) => data.sortBy,
  ),
  getSearchBy: createSelector(
    (state: any) => state[slice.name],
    (data: any) => data.searchBy,
  ),
})
