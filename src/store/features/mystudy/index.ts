import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import helper from "./helper";
import studyDataService from "../../services/mystudy.service";
import selector from './selector'

export interface StudiesState {
  currentStudy: any
  topStudies: any[]
  myStudies: any[]
  studyActiveColumn: any[]
  myStudiesCount: any
}

const initialState: StudiesState = {
  currentStudy: {},
  topStudies: [],
  myStudies: [],
  studyActiveColumn: [],
  myStudiesCount: {}
}

// async actions
export const getTopStudies: any = createAsyncThunk(
  "study/getTopStudies",
  async () => {
    const res = await studyDataService.getTopStudies();
    return res.data;
  }
);
export const getStudiesActiveColumns: any = createAsyncThunk(
  "study/getStudiesActiveColumns",
  async () => {
    const res = await studyDataService.getStudiesActiveColumns();
    return res.data;
  }
);
export const getMyStudiesCount: any = createAsyncThunk(
  "study/getMyStudiesCount",
  async () => {
    const res = await studyDataService.getMyStudiesCount();
    return res.data;
  }
);
export const getMyStudies: any = createAsyncThunk(
  "study/getMyStudies",
  async (data: string) => {
    const res = await studyDataService.getMyStudies(data);
    return res.data;
  }
);
export const getStudy: any = createAsyncThunk(
  "study/getStudy",
  async (id: any) => {
    const res = await studyDataService.getStudy(id);
    return res.data;
  }
);
export const createInitiate: any = createAsyncThunk(
  "study/createInitiate",
  async (data: any) => {
    const res = await studyDataService.createInitiate(data);
    return res.data;
  }
);
export const updateInitiate: any = createAsyncThunk(
  "study/updateInitiate",
  async (id: string, data: any) => {
    const res = await studyDataService.updateInitiate(id, data);
    return res.data;
  }
);
export const updateInitiateDone: any = createAsyncThunk(
  "study/updateInitiateDone",
  async (id: string, data: any) => {
    const res = await studyDataService.updateInitiateDone(id, data);
    return res.data;
  }
);
export const updateBuild: any = createAsyncThunk(
  "study/updateBuild",
  async (id: string, data: any) => {
    const res = await studyDataService.updateBuild(id, data);
    return res.data;
  }
);
export const updateBuildDone: any = createAsyncThunk(
  "study/updateBuildDone",
  async (id: string, data: any) => {
    const res = await studyDataService.updateBuildDone(id, data);
    return res.data;
  }
);
export const updateWorkspace: any = createAsyncThunk(
  "study/updateWorkspace",
  async (id: string, data: any) => {
    const res = await studyDataService.updateWorkspace(id, data);
    return res.data;
  }
);
export const updateWorkspaceDone: any = createAsyncThunk(
  "study/updateWorkspaceDone",
  async (id: string, data: any) => {
    const res = await studyDataService.updateWorkspaceDone(id, data);
    return res.data;
  }
);
export const updateComplete: any = createAsyncThunk(
  "study/updateComplete",
  async (id: string, data: any) => {
    const res = await studyDataService.updateComplete(id, data);
    return res.data;
  }
);
export const updateCompleteStudy: any = createAsyncThunk(
  "study/updateCompleteStudy",
  async (id: string, data: any) => {
    const res = await studyDataService.updateCompleteStudy(id, data);
    return res.data;
  }
);
export const abandonStudy: any = createAsyncThunk(
  "study/abandonStudy",
  async (id: string) => {
    const res = await studyDataService.abandonStudy(id);
    return res.data;
  }
);

export const studySlice: any = createSlice({
  name: 'mystudy',
  initialState,
  reducers: {
  },
  extraReducers: {
    [getTopStudies.fulfilled]: (state, action) => {
      state.topStudies = action.payload;
    },
    [getStudiesActiveColumns.fulfilled]: (state, action) => {
      state.studyActiveColumn = action.payload;
    },
    [getMyStudiesCount.fulfilled]: (state, action) => {
      state.myStudiesCount = action.payload;
    },
    [getMyStudies.fulfilled]: (state, action) => {
      state.myStudies = action.payload;
    },
    [getStudy.fulfilled]: (state, action) => {
      state.currentStudy = action.payload;
    },
    [createInitiate.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
    },
    [updateInitiate.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
    [updateInitiateDone.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
    [updateBuild.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
    [updateBuildDone.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
    [updateWorkspace.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
    [updateWorkspaceDone.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
    [updateComplete.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
    [updateCompleteStudy.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
    [abandonStudy.fulfilled]: (state, action) => {
      state.currentStudy = { ...state.currentStudy, ...action.payload };
      // state.topStudies = helper.updateStudyListByStudy(state.topStudies, state.currentStudy);
      // state.myStudies = helper.updateStudyListByStudy(state.myStudies, state.currentStudy);
    },
  },
})

export const studySelector = selector(studySlice)

export default studySlice.reducer
