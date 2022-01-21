import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./mySaga";
import loginReducers from "features/login/loginSlice";
import registerReducers from "features/register/RegisterSlice";
import roomReducers from "features/room/roomSlice";
import loadingReducers from "features/loading/loadingSlice";
import userReducers from "features/user/userSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loginReducers,
  registerReducers,
  roomReducers,
  loadingReducers,
  userReducers,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);
