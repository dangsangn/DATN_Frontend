import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listRoom: [],
  loading: false,
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    getListRomm: (state, action) => {
      state.loading = true;
    },
    getListRommSucceeded: (state, action) => {
      state.loading = false;
      state.listRoom = action.payload;
    },
  },
});

const roomRenderers = roomSlice.reducer;
export default roomRenderers;
