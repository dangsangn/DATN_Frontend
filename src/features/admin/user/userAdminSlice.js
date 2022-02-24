import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listUser: [],
};

const userAdminSlice = createSlice({
  name: "userAdmin",
  initialState,
  reducers: {
    getListUser: (state, action) => {
      state.listUser = [];
    },
    getListUserSuccess: (state, action) => {
      state.listUser = action.payload;
    },
    getListUserFailures: (state, action) => {
      state.listUser = [];
    },
    deleteUser: (state, action) => {
      // console.log(action.payload);
    },
    deleteUserSuccess: (state, action) => {
      const newList = state.listUser.filter(
        (item) => item._id !== action.payload
      );
      state.listUser = newList;
    },
  },
});

export const userAdminActions = userAdminSlice.actions;

export const selectIsuserAdmin = (state) => state.userAdmin.isuserAdmin;
export const selectLoadinguserAdmin = (state) => state.loading.loading;

const userAdminReducers = userAdminSlice.reducer;
export default userAdminReducers;
