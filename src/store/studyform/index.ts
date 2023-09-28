import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import selector from './selector'
import data from './data'

export interface StudyformState {
  data: any
}

const initialState: StudyformState = { data }

export const studyformSlice = createSlice({
  name: 'studyform',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
    },
    decrement: (state) => {
      // state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = studyformSlice.actions


export const studyformSelector = selector(studyformSlice)

export default studyformSlice.reducer
