import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "src/utils/helpers";

import { login, setPassword } from "./authActions";
const initialState = {
  loading: false,
  userData: getLocalStorage("userData"),
  error: {},
  isAuthenticated: getLocalStorage("isAuthenticated") === true,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.userData = action.payload;
    },
    setUserLogout: (state) => {
      state.userData = {};
      state.isAuthenticated = false;
      clearLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      setLocalStorage("userData", payload);
      if (payload?.token) {
        state.isAuthenticated = true;
        state.userData = payload;
        setLocalStorage("isAuthenticated", true);
      }
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.error = payload; //setting error in state
      state.loading = false;
    });
    // set password
    builder.addCase(setPassword.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(setPassword.fulfilled, (state, { payload }) => {
      setLocalStorage("userData", payload);
      if (payload?.token) {
        state.isAuthenticated = true;
        state.userData = payload;
        setLocalStorage("isAuthenticated", true);
      }
      state.loading = false;
    });
    builder.addCase(setPassword.rejected, (state, { payload }) => {
      state.error = payload; //setting error in state
      state.loading = false;
    });
  },
});

export const { setAuthentication, setUser, setUserLogout } = authSlice.actions;
export default authSlice.reducer;
