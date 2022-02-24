import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomDetail: {},
};

const roomDetailSlice = createSlice({
  name: "roomDetail",
  initialState,
  reducers: {
    getDetailRoom: (state, action) => {},
    getDetailRoomSuccess: (state, action) => {
      state.roomDetail = action.payload;
    },
    updateRoomOrder: (state, action) => {},
    updateRoomOrderSuccess: (state, action) => {
      state.roomDetail = action.payload;
    },
  },
});

export const roomDetailActions = roomDetailSlice.actions;
const roomDetailRenderers = roomDetailSlice.reducer;
export default roomDetailRenderers;
