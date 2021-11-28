import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  logging: false,
  user: undefined,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.logging = true;
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
      state.logging = false;
      state.user = action.payload;
    },
    loginFailures: (state, action) => {
      state.isLogin = false;
      state.logging = false;
    },
    logout: (state, action) => {
      state.logging = false;
      state.isLogin = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export const selectIsLogin = (state) => state.login.isLogin;
export const selectLogging = (state) => state.logging.logging;

const loginReducers = loginSlice.reducer;
export default loginReducers;
