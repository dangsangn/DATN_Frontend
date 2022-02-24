import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import {
  getProfile,
  updatePasswordApi,
  updateProfileUserApi,
} from "features/user/api";
import { userActions } from "./userSlice";
import { loadingActions } from "features/loading/loadingSlice";

function* getProfileSaga() {
  try {
    loadingActions.handleLoading(true);
    const res = yield call(getProfile);
    if (res.data) {
      loadingActions.handleLoading(false);
      yield put(userActions.getProfileSuccess(res.data));
    }
  } catch (error) {
    loadingActions.handleLoading(false);
    console.log(error);
  }
}

function* updatePasswordSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(updatePasswordApi, payload);
    if (res) {
      yield put(loadingActions.setMessageSuccess("Update password success!"));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.setMessageError("Occur error!"));
  }
}

function* updateProfileSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(updateProfileUserApi, payload);
    if (res?.data) {
      yield put(userActions.updateProfileSuccess(res.data));
      yield put(loadingActions.setMessageSuccess("Update profile success!"));
    }
  } catch (error) {
    yield put(loadingActions.setMessageError("Occur error!"));
  }
}

export function* userSaga() {
  yield takeEvery(userActions.getProfile, getProfileSaga);
  yield takeLatest(userActions.updatePassword, updatePasswordSaga);
  yield takeLatest(userActions.updateProfile, updateProfileSaga);
}
