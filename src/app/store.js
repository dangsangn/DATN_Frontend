import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./mySaga";
import loginReducers from "features/login/loginSlice";
import registerReducers from "features/register/RegisterSlice";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loginReducers: loginReducers,
  registerReducers: registerReducers,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);
