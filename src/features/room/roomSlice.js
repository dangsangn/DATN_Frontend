import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listRoom: [],
  listRoomVerified: [],
  totalRow: 0,
  loading: false,
  initialValueForm: {
    images: [],
    utilities: [],
  },
  isCreate: false,
  isUpdate: false,
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
      state.listRoom = action.payload.rooms;
      state.totalRow = action.payload.pagination.totalRow;
    },
    getListRommFailed: (state, action) => {},
    inforFormTemporary: (state, action) => {
      state.initialValueForm = {
        ...state.initialValueForm,
        ...action.payload,
      };
    },
    clearForm: (state, action) => {
      state.initialValueForm = { images: [], utilities: [] };
    },
    createRoom: (state, action) => {
      state.isCreate = false;
    },
    createRoomSuccess: (state, action) => {
      state.isCreate = true;
    },
    createRoomError: (state, action) => {},
    updateRoom: (state, action) => {
      state.isUpdate = false;
    },
    updateRoomSuccess: (state, action) => {
      state.isUpdate = true;
    },
    getListRoomVerify: (state, action) => {},
    getListRoomVerifySuccess: (state, action) => {
      state.listRoomVerified = action.payload.rooms;
      state.totalRow = action.payload.pagination.totalRow;
    },
  },
});

export const roomActions = roomSlice.actions;
const roomRenderers = roomSlice.reducer;
export default roomRenderers;
