import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegister: false,
  registerLoading: false,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    register: (state, action) => {
      state.registerLoading = true;
    },
    registerSuccess: (state, action) => {
      state.isRegister = true;
      state.registerLoading = false;
    },
    registerFailures: (state, action) => {
      state.isRegister = false;
      state.registerLoading = false;
    },
  },
});

export const registerActions = registerSlice.actions;

export const selectIsRegister = (state) => state.register.isRegister;
export const selectRegisterLoading = (state) => state.register.registerLoading;

const registerReducers = registerSlice.reducer;
export default registerReducers;
