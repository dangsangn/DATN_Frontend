import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { login } from "apis/auth";
import { loadingActions } from "features/loading/loadingSlice";
import { userActions } from "features/user/userSlice";
import history from "utils/history";
import { loginActions } from "./loginSlice";
function* handleLogin({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(login, payload);
    const { user, accessToken } = res.data;
    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      yield put(loginActions.loginSuccess({ ...user }));
      yield put(userActions.getProfile());
      yield put(loadingActions.setMessageSuccess("Login success"));
      if (user.isAdmin) {
        history.push("/admin/dashboard");
      } else {
        history.push("/");
      }
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.setMessageError("Login failed"));
  }
}

function* handleLogout() {
  yield put(userActions.clearProfile());
  localStorage.removeItem("access_token");
  history.push("/");
}

export function* loginSaga() {
  yield takeLatest(loginActions.login, handleLogin);
  yield takeEvery(loginActions.logout, handleLogout);
}
