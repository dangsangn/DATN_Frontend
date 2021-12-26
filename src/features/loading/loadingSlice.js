import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  messageSuccess: "",
  messageError: "",
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    endLoading: (state, action) => {
      state.loading = false;
    },
    setMessageSuccess: (state, action) => {
      state.loading = false;
      state.messageSuccess = action.payload;
    },
    setMessageError: (state, action) => {
      state.loading = false;
      state.messageError = action.payload;
    },
    closeMessage: (state, action) => {
      state.loading = false;
      state.messageError = "";
      state.messageSuccess = "";
    },
  },
});

export const loadingActions = loadingSlice.actions;
const loadingRenderers = loadingSlice.reducer;
export default loadingRenderers;
