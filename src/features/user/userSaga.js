import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getProfile } from "apis/user";
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

export function* userSaga() {
  yield takeEvery(userActions.getProfile, getProfileSaga);
}
