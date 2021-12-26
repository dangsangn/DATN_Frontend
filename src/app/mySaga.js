import { roomSaga } from "features/room/roomSaga";
import { loginSaga } from "features/login/loginSaga";
import { registerSaga } from "features/register/RegisterSaga";
import { loadingSaga } from "features/loading/loadingSaga";
import { all } from "redux-saga/effects";

export function* mySaga() {
  yield all([loginSaga(), registerSaga(), roomSaga(), loadingSaga()]);
}
