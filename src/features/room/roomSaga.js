import { call, put, takeEvery } from "@redux-saga/core/effects";
import { roomActions } from "./roomSlice";
import queryString from "query-string";
import { getRoomsApi } from "apis/room";

function* getListRomm({ payload }) {
  try {
    const res = yield call(getRoomsApi, queryString.stringify(payload));
    yield put(roomActions.getListRommSucceeded(res.data.rooms));
  } catch (error) {
    yield put(roomActions.getListRommFailed());
  }
}

export function* roomSaga() {
  yield takeEvery(roomActions.getListRomm, getListRomm);
}
