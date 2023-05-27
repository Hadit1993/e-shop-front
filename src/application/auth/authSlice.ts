import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  hasUserAuthenticated: boolean;
}

const initialState: AuthState = {
  hasUserAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.hasUserAuthenticated = action.payload;
    },
  },
});

export const { changeAuthStatus } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
