import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

import documentService from "../../services/document.service";
import selector from './document_selector'

export interface DocumentState {
  activeTab: number;
  searchQuery: any[];
  documents: any[];
  searchBy: string, 
  sortBy: string, 
}

const initialState: DocumentState = {
  activeTab: 1,
  searchQuery: [],
  searchBy: '',
  sortBy: 'date', // title, createdBy,
  documents: [
    {
      title: 'Title1',
      createdBy: 'Joe zee',
      status: 'Locked',
      RScore: '64.4',
      PScore: '8th/9th',
      isBookmarked: false,
    },
    {
      title: 'Title2',
      createdBy: 'Joe zee',
      status: 'Active',
      RScore: '20',
      PScore: '8th/9th',
      isBookmarked: true,
    },
    {
      title: 'Title3',
      createdBy: 'Joe zee',
      status: 'Inactive',
      RScore: '30',
      PScore: '8th/9th'
    },
  ],
}

export const loadSearchQuery: any = createAsyncThunk(
  "user/loadUserRoles",
  async () => {
    const res = await documentService.loadSearchQuery();
    return res.data;
  }
);

export const documentSlice: any = createSlice({
  name: 'document',
  initialState,
  reducers: {
    updateSearchBy(state: any, action: any) {
      state.searchBy = action.payload;
    },
    updateSortBy(state: any, action: any) {
      state.sortBy = action.payload;
    },
  },
  extraReducers: {
    [loadSearchQuery.fulfilled]: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
})

export const documentSelector = selector(documentSlice);
export const { updateSearchBy, updateSortBy } = documentSlice.actions;

export default documentSlice.reducer

