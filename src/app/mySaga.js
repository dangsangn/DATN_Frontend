import { loginSaga } from "features/login/loginSaga";
import { registerSaga } from "features/register/RegisterSaga";
import { all } from "redux-saga/effects";

export function* mySaga() {
  yield all([loginSaga(), registerSaga()]);
}
