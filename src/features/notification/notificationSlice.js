import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countNotRead: 0,
  listNotification: [],
  loading: false,
  error: "",
  setRead: false,
  status: 1,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    getListNotification: (state, action) => {
      state.listNotification = [];
      state.loading = true;
      state.status = 1;
    },
    getListNotificationSuccess: (state, action) => {
      state.listNotification = action.payload;
      state.loading = false;
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
    getListNotificationNotRead: (state, action) => {
      state.listNotification = [];
      state.loading = true;
      state.status = 0;
    },
    deleteNotification: (state, action) => {},
    deleteNotificationSuccess: (state, action) => {
      const newList = state.listNotification.filter(
        (item) => item._id !== action.payload
      );
      state.listNotification = newList;
    },
  },
});

export const notificationActions = notificationSlice.actions;

const notificationReducers = notificationSlice.reducer;
export default notificationReducers;
