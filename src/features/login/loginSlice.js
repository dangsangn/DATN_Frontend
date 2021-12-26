import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  loading: false,
  user: undefined,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
      state.loading = false;
      state.user = action.payload;
    },
    loginFailures: (state, action) => {
      state.isLogin = false;
      state.loading = false;
    },
    logout: (state, action) => {
      state.loading = false;
      state.isLogin = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export const selectIsLogin = (state) => state.login.isLogin;
export const selectLoadingLogin = (state) => state.loading.loading;

const loginReducers = loginSlice.reducer;
export default loginReducers;
