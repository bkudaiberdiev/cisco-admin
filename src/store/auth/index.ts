import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  value: number;
}

const initialState: IAuthState = {
  value: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});
export default authSlice.reducer;
