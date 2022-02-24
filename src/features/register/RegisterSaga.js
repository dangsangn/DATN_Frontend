import { takeLatest, call, put } from "@redux-saga/core/effects";
import { registerActions } from "./RegisterSlice";
import { loadingActions } from "features/loading/loadingSlice";
import { register } from "apis/auth";
import history from "utils/history";
function* registerHandel({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(register, payload);
    if (res.status === 202) {
      yield put(loadingActions.setMessageError(res.data));
    } else {
      yield put(loadingActions.setMessageSuccess(res.data));
      yield put(registerActions.registerSuccess());
      history.push("/login");
    }
  } catch (error) {
    console.log(error);
    yield put(registerActions.registerFailures());
  }
}

export function* registerSaga() {
  yield takeLatest(registerActions.register, registerHandel);
}
