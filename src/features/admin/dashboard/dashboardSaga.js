import { call, put, takeEvery } from "@redux-saga/core/effects";
import { loadingActions } from "features/loading/loadingSlice";
import {
  getStatisticDistrictApi,
  getStatisticRoomApi,
  getStatisticUserApi,
} from "./apis";
import { dashboardAdminActions } from "./dashboardSlice";

function* getStatisticRoomSaga() {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getStatisticRoomApi);
    if (res.data) {
      yield put(dashboardAdminActions.getStatisticRoomSuccess(res.data));
      yield put(loadingActions.handleLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.handleLoading(false));
  }
}

function* getStatisticUserSaga() {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getStatisticUserApi);
    if (res.data) {
      yield put(dashboardAdminActions.getStatisticUserSuccess(res.data));
      yield put(loadingActions.handleLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.handleLoading(false));
  }
}

function* getStatisticDistrictSaga() {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getStatisticDistrictApi);
    if (res.data) {
      yield put(dashboardAdminActions.getStatisticDistrictSuccess(res.data));
      yield put(loadingActions.handleLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.handleLoading(false));
  }
}

export function* dashboardAdminSaga() {
  yield takeEvery(dashboardAdminActions.getStatisticRoom, getStatisticRoomSaga);
  yield takeEvery(dashboardAdminActions.getStatisticUser, getStatisticUserSaga);
  yield takeEvery(
    dashboardAdminActions.getStatisticDistrict,
    getStatisticDistrictSaga
  );
}
