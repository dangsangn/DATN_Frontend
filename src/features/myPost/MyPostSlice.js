import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listRoomUser: [],
  selectRoom: {},
};

const myPostSlice = createSlice({
  name: "myPost",
  initialState,
  reducers: {
    getListRoomUser: (state, action) => {
      state.listRoomUser = [];
    },
    getListRoomUserSuccess: (state, action) => {
      state.listRoomUser = action.payload;
    },
    getListRoomUserFailures: (state, action) => {
      state.listRoomUser = [];
    },
    getDetailRoom: (state, action) => {},
    getDetailRoomSuccess: (state, action) => {
      state.selectRoom = action.payload;
    },
    deleteRoom: (state, action) => {},
    deleteRoomSuccess: (state, action) => {
      const newList = state.listRoomUser.filter(
        (item) => item._id !== action.payload
      );
      state.listRoomUser = newList;
    },
  },
});

export const myPostActions = myPostSlice.actions;

const myPostReducers = myPostSlice.reducer;
export default myPostReducers;
