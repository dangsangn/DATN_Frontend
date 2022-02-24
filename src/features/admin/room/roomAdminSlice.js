import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listRoom: [],
  selectRoom: {},
};

const roomAdminSlice = createSlice({
  name: "roomAdmin",
  initialState,
  reducers: {
    getListRoom: (state, action) => {
      state.listRoom = [];
    },
    getListRoomSuccess: (state, action) => {
      state.listRoom = action.payload;
    },
    getListRoomFailures: (state, action) => {
      state.listRoom = [];
    },
    deleteRoom: (state, action) => {},
    deleteRoomSuccess: (state, action) => {
      const newList = state.listRoom.filter(
        (item) => item._id !== action.payload
      );
      state.listRoom = newList;
    },
    getDetailRoom: (state, action) => {},
    getDetailRoomSuccess: (state, action) => {
      state.selectRoom = action.payload;
    },
    verifyRoom: (state, action) => {},
    verifyRoomSuccess: (state, action) => {
      state.selectRoom = action.payload;
      const newArray = state.listRoom;
      const indexVerify = newArray.findIndex(
        (item) => item._id === action.payload._id
      );
      newArray[indexVerify].verify = action.payload.verify;
      state.listRoom = newArray;
    },
  },
});

export const roomAdminActions = roomAdminSlice.actions;

export const selectIsRoomAdmin = (state) => state.roomAdmin.isRoomAdmin;
export const selectLoadingRoomAdmin = (state) => state.loading.loading;

const RoomAdminReducers = roomAdminSlice.reducer;
export default RoomAdminReducers;
