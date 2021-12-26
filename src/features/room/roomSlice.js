import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listRoom: [],
  loading: false,
  initialValueForm: {
    images: [],
    utilities: [],
  },
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
    getListRommFailed: (state, action) => {},
    inforFormTemporary: (state, action) => {
      state.initialValueForm = {
        ...state.initialValueForm,
        ...action.payload,
      };
    },
  },
});

export const roomActions = roomSlice.actions;
const roomRenderers = roomSlice.reducer;
export default roomRenderers;
