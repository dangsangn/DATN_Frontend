import { call, fork, put, take } from "@redux-saga/core/effects";
import { loginActions } from "./loginSlice";
import { login } from "apis/auth";
import history from "utils/history";
function* handleLogin(payload) {
  try {
    const res = yield call(login, payload);
    const { user, accessToken } = res.data;
    sessionStorage.setItem("access_token", accessToken);
    yield put(loginActions.loginSuccess({ ...user }));
    console.log(user);
    history.push("/");
  } catch (error) {
    yield put(loginActions.loginFailures("login failed"));
  }
}

function* handleLogout() {
  sessionStorage.removeItem("access_token");
  yield put(loginActions.logout());
  history.push("/login");
}

function* watchLoginFlow() {
  while (true) {
    const isLogin = Boolean(sessionStorage.getItem("access_token"));
    console.log(isLogin);
    if (!isLogin) {
      const actions = yield take(loginActions.login);
      yield fork(handleLogin, actions.payload);
    }
    yield take(loginActions.logout);
    //here use call is blocking to wait handle logout, if use fork is none blocking will run loop
    yield call(handleLogout);
  }
}
export function* loginSaga() {
  yield fork(watchLoginFlow);
}
