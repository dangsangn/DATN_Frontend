import { takeLatest, call, put } from "@redux-saga/core/effects";
import { registerActions } from "./RegisterSlice";
import { register } from "apis/auth";
import history from "utils/history";
function* registerHandel({ payload }) {
  console.log(payload);
  try {
    const res = yield call(register, payload);
    console.log(res);
    if (res.data === "register success") {
      yield put(registerActions.registerSuccess());
      history.push("/login");
    }
  } catch (error) {
    yield put(registerActions.registerSuccess());
  }
}

export function* registerSaga() {
  yield takeLatest(registerActions.register, registerHandel);
}
