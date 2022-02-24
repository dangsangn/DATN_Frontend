import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { roomActions } from "./roomSlice";
import queryString from "query-string";
import { createRoomApi, getRoomsApi, updateRoomApi } from "apis/room";
import { loadingActions } from "features/loading/loadingSlice";
function* getListRommSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getRoomsApi, queryString.stringify(payload));
    if (res.data.rooms) {
      yield put(loadingActions.handleLoading(false));
      yield put(roomActions.getListRommSucceeded(res.data));
    }
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
    yield put(roomActions.getListRommFailed());
  }
}

function* createRoomSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(createRoomApi, payload);
    if (res?.status === 202) {
      yield put(loadingActions.handleLoading(false));
      yield put(roomActions.createRoomSuccess());
    }
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
    console.log(error);
  }
}

function* getListRoomVerifySaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getRoomsApi, queryString.stringify(payload));
    if (res.data.rooms) {
      yield put(roomActions.getListRoomVerifySuccess(res.data));
      yield put(loadingActions.handleLoading(false));
    }
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
  }
}

function* updateRoomSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(updateRoomApi, payload);
    // console.log("res", res);
    if (res?.status === 202) {
      yield put(loadingActions.handleLoading(false));
      yield put(roomActions.updateRoomSuccess());
    }
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
    console.log(error);
  }
}

export function* roomSaga() {
  yield takeEvery(roomActions.getListRomm, getListRommSaga);
  yield takeLatest(roomActions.createRoom, createRoomSaga);
  yield takeEvery(roomActions.getListRoomVerify, getListRoomVerifySaga);
  yield takeLatest(roomActions.updateRoom, updateRoomSaga);
}
