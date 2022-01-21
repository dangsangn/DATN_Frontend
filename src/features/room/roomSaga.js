import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { roomActions } from "./roomSlice";
import queryString from "query-string";
import { createRoomApi, getRoomsApi } from "apis/room";
import { loadingActions } from "features/loading/loadingSlice";
function* getListRomm({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getRoomsApi, queryString.stringify(payload));
    if (res.data.rooms) {
      yield put(loadingActions.handleLoading(false));
      yield put(roomActions.getListRommSucceeded(res.data.rooms));
    }
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
    yield put(roomActions.getListRommFailed());
  }
}

function* createRoom({ payload }) {
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

export function* roomSaga() {
  yield takeEvery(roomActions.getListRomm, getListRomm);
  yield takeLatest(roomActions.createRoom, createRoom);
}
