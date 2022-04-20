import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./mySaga";
import loginReducers from "features/login/loginSlice";
import registerReducers from "features/register/RegisterSlice";
import roomReducers from "features/room/roomSlice";
import loadingReducers from "features/loading/loadingSlice";
import userReducers from "features/user/userSlice";
import messagesReducers from "features/messages/MessageSlice";
import roomDetailRenderers from "features/roommate/roomDetailSlice";
import userAdminReducers from "features/admin/user/userAdminSlice";
import roomAdminReducers from "features/admin/room/roomAdminSlice";
import dashboarAdmindReducers from "features/admin/dashboard/dashboardSlice";
import myPostReducers from "features/myPost/MyPostSlice";
import orderReducers from "features/order/orderSlice";
import notificationReducers from "features/notification/notificationSlice";
import viewMapReducers from "features/viewMap/viewMapSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loginReducers,
  registerReducers,
  roomReducers,
  loadingReducers,
  userReducers,
  roomDetailRenderers,
  messagesReducers,
  userAdminReducers,
  roomAdminReducers,
  myPostReducers,
  orderReducers,
  notificationReducers,
  dashboarAdmindReducers,
  viewMapReducers,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);
