import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statisticUser: [],
  statisticRoom: [],
  statisticDistrict: [],
};

const dashboardAdminSlice = createSlice({
  name: "dashboardAdmin",
  initialState,
  reducers: {
    getStatisticUser: (state, action) => {
      state.statisticUser = [];
    },
    getStatisticUserSuccess: (state, action) => {
      state.statisticUser = action.payload;
    },
    getStatisticUserFailures: (state, action) => {
      state.statisticUser = [];
    },
    getStatisticRoom: (state, action) => {
      state.statisticRoom = [];
    },
    getStatisticRoomSuccess: (state, action) => {
      state.statisticRoom = action.payload;
    },
    getStatisticRoomFailures: (state, action) => {
      state.statisticRoom = [];
    },
    getStatisticDistrict: (state, action) => {
      state.statisticDistrict = [];
    },
    getStatisticDistrictSuccess: (state, action) => {
      state.statisticDistrict = action.payload;
    },
    getStatisticDistrictFailures: (state, action) => {
      state.statisticDistrict = [];
    },
  },
});

export const dashboardAdminActions = dashboardAdminSlice.actions;

const dashboardAdminReducers = dashboardAdminSlice.reducer;
export default dashboardAdminReducers;
