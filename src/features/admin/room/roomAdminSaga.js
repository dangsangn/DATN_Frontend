import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { loadingActions } from "features/loading/loadingSlice";
import {
  deleteRoomApi,
  getListRoomApi,
  getRoomDetailApi,
  verifyRoomApi,
} from "./api";
import { roomAdminActions } from "./roomAdminSlice";
import queryString from "query-string";

function* getListRoomSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const q = queryString.stringify(payload);
    const res = yield call(getListRoomApi, q);
    if (res.data) {
      // console.log("res.data", res.data);
      yield put(roomAdminActions.getListRoomSuccess(res.data.rooms));
      yield put(loadingActions.handleLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.handleLoading(false));
  }
}

function* deleteRoomSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(deleteRoomApi, payload);
    if (res.status === 202) {
      yield put(roomAdminActions.deleteRoomSuccess(payload));
      yield put(loadingActions.setMessageSuccess("Delete success"));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.setMessageError("Occur error!"));
  }
}

function* verifyRoomSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(verifyRoomApi, payload);
    if (res.data) {
      yield put(roomAdminActions.verifyRoomSuccess(res.data));
      yield put(
        loadingActions.setMessageSuccess(
          !res.data?.verify ? "Room unverify!" : "Room verify!"
        )
      );
    }
  } catch (error) {
    yield put(loadingActions.setMessageError("Occur error!"));
  }
}

function* getDetailRoomSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getRoomDetailApi, payload);
    yield put(roomAdminActions.getDetailRoomSuccess(res.data));
    yield put(loadingActions.handleLoading(false));
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
  }
}

export function* roomAdminSaga() {
  yield takeEvery(roomAdminActions.getListRoom, getListRoomSaga);
  yield takeLatest(roomAdminActions.deleteRoom, deleteRoomSaga);
  yield takeLatest(roomAdminActions.verifyRoom, verifyRoomSaga);
  yield takeLatest(roomAdminActions.getDetailRoom, getDetailRoomSaga);
}
