import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { loadingActions } from "features/loading/loadingSlice";
import { deleteUserApi, getListUserApi } from "./api";
import { userAdminActions } from "./userAdminSlice";
import queryString from "query-string";

function* getListUserSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const q = queryString.stringify(payload);
    const res = yield call(getListUserApi, q);
    if (res.data) {
      yield put(userAdminActions.getListUserSuccess(res.data.users));
      yield put(loadingActions.handleLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.handleLoading(false));
  }
}

function* deleteUserSaga({ payload }) {
  try {
    const res = yield call(deleteUserApi, payload);
    if (res.status === 202) {
      yield put(userAdminActions.deleteUserSuccess(payload));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* userAdminSaga() {
  yield takeEvery(userAdminActions.getListUser, getListUserSaga);
  yield takeLatest(userAdminActions.deleteUser, deleteUserSaga);
}
