import { createSlice } from "@reduxjs/toolkit";
import {
  getGlobalDocumentAction,
  getStudentDocumentAction,
  getStudentsAction,
  getUserAction,
} from "./actions";

interface IStudentState {
  error: string;
  isLoading: boolean;
  students: any;
  documents: any;
  studentDocuments: any;
  user: any;
}

const initialState: IStudentState = {
  error: "",
  isLoading: false,
  students: [],
  documents: [],
  studentDocuments: [],
  user: null,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: {
    [getStudentsAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getStudentsAction.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
    [getStudentsAction.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.students = action.payload;
    },
    //   ///////////////////////////////////////
    [getGlobalDocumentAction.fulfilled.type]: (state, action) => {
      state.documents = action.payload.results;
    },
    //   //////////////////////////////////////////
    [getStudentDocumentAction.fulfilled.type]: (state, action) => {
      state.studentDocuments = action.payload.results;
    },
    [getUserAction.fulfilled.type]: (state, action) => {
      state.user = action.payload;
    },
  },
});
export default studentSlice.reducer;
