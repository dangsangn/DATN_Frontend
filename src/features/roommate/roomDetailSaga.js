import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { getDetailRoomApi } from "apis/room";
import { loadingActions } from "features/loading/loadingSlice";
import { updateRoomOrderApi } from "./api";
import { roomDetailActions } from "./roomDetailSlice";

function* getRoomDetailSata({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getDetailRoomApi, payload);
    if (res.data) {
      yield put(loadingActions.handleLoading(false));
      yield put(roomDetailActions.getDetailRoomSuccess(res.data));
    }
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
    console.log(error);
  }
}

function* updateRoomOrderSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(updateRoomOrderApi, payload);
    // console.log("res", res);
    if (res.data) {
      yield put(roomDetailActions.updateRoomOrderSuccess(res.data));
      yield put(loadingActions.setMessageSuccess("Order room success!"));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.setMessageError("Occur error!"));
  }
}

export function* roomDetailSaga() {
  yield takeEvery(roomDetailActions.getDetailRoom, getRoomDetailSata);
  yield takeLatest(roomDetailActions.updateRoomOrder, updateRoomOrderSaga);
}
