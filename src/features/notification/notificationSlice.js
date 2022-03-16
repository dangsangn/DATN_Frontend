import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countNotRead: 0,
  listNotification: [],
  loading: false,
  error: "",
  setRead: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    getListNotification: (state, action) => {
      state.listNotification = [];
      state.loading = false;
    },
    getListNotificationSuccess: (state, action) => {
      state.listNotification = action.payload;
      state.loading = true;
    },
    getListNotificationError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    createNotification: (state, action) => {},
    setReadedNotification: (state, action) => {
      state.setRead = false;
    },
    setReadedNotificationSuccess: (state, action) => {
      state.setRead = true;
    },
    getTotalNotificationsNotRead: (state, action) => {},
    getTotalNotificationsNotReadSuccess: (state, action) => {
      state.countNotRead = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;

const notificationReducers = notificationSlice.reducer;
export default notificationReducers;
