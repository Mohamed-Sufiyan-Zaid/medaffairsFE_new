import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import toolsDataService from "../../services/tools.service";
import selector from './selector'

export interface ToolState {
  _id: string
  categoryId: string
  name: string
  img: string
  desc: string
  link: string
  order: number
}
export interface ToolsCategoriesState {
  _id: string
  name: string
  order: number
  tools: ToolState[]
}
export interface ToolsState {
  data: ToolsCategoriesState[]
}
const initialState: ToolsState = {
  data: [],
}

// async actions
export const getTools: any = createAsyncThunk(
  "tools/getTools",
  async () => {
    const res = await toolsDataService.getAll();
    return res.data;
  }
);


export const toolsSlice: any = createSlice({
  name: 'tools',
  initialState,
  reducers: {},
  extraReducers: {
    [getTools.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
})

export const toolsSelector = selector(toolsSlice)

export default toolsSlice.reducer
