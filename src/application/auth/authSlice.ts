import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthStatus = "Authenticated" | "Unauthenticated" | "unknown";

export interface AuthState {
  authStatus: AuthStatus;
}

const initialState: AuthState = {
  authStatus: "unknown",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.authStatus = action.payload ? "Authenticated" : "Unauthenticated";
    },
  },
});

export const { changeAuthStatus } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
