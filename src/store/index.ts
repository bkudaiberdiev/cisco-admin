import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "./test";
import { authSlice } from "./auth";
import { studentSlice } from "./students";

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    testReducer: testSlice.reducer,
    studentReducer: studentSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
