import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    refuseOrder: (state, action) => {},
    refuseOrderSuccess: (state, action) => {},
  },
});

export const orderActions = orderSlice.actions;

const orderReducers = orderSlice.reducer;
export default orderReducers;
