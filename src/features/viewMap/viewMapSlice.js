import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  places: [],
  loading: false,
};

const viewMapSlice = createSlice({
  name: "viewMap",
  initialState,
  reducers: {
    getPlaces: (state, action) => {
      state.places = [];
      state.loading = true;
    },
    getPlacesSuccess: (state, action) => {
      state.places = action.payload;
      state.loading = false;
    },
    getPlacesError: (state, action) => {
      state.loading = false;
    },
  },
});

export const viewMapActions = viewMapSlice.actions;
const viewMapReducers = viewMapSlice.reducer;
export default viewMapReducers;
