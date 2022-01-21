import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listRoom: [],
  loading: false,
  initialValueForm: {
    images: [],
    utilities: [],
  },
  isCreate: false,
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
    createRoom: (state, action) => {
      state.isCreate = false;
    },
    createRoomSuccess: (state, action) => {
      state.isCreate = true;
    },
    createRoomError: (state, action) => {},
  },
});

export const roomActions = roomSlice.actions;
const roomRenderers = roomSlice.reducer;
export default roomRenderers;
