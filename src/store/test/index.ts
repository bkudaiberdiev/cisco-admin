import { createSlice } from "@reduxjs/toolkit";
import { getDirectionsAction, getSubjectsActions, getThemeAction } from "./actions";
import { IDirections, ISubjects, IThemes } from "./interface";

interface ITestStore {
  directions: IDirections[];
  isLoading: boolean;
  error: string;
  subjects: ISubjects[];
  themes: IThemes[];
  selectedTheme: any;
}

const initialState: ITestStore = {
  directions: [],
  isLoading: false,
  error: "",
  subjects: [],
  themes: [],
  selectedTheme: null,
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    setSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
  extraReducers: {
    [getDirectionsAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getDirectionsAction.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getDirectionsAction.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.directions = action.payload.results;
    },
    //   /////////////////////////////////////////////////////////////////////////
    [getSubjectsActions.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSubjectsActions.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getSubjectsActions.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.subjects = action.payload.results;
    },
    //   /////////////////////////////////////////////////////////////////////////

    [getThemeAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getThemeAction.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getThemeAction.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.themes = action.payload.results;
    },
  },
});
export default testSlice.reducer;
export const { setSelectedTheme } = testSlice.actions;
