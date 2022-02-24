import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { deleteRoomApi, getRoomDetailApi } from "features/admin/room/api";
import { loadingActions } from "features/loading/loadingSlice";
import { getListRoomUserApi } from "./api";
import { myPostActions } from "./MyPostSlice";

function* getListRoomUserSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getListRoomUserApi);
    if (res.data) {
      // console.log("res.data", res.data);
      yield put(myPostActions.getListRoomUserSuccess(res.data));
      yield put(loadingActions.handleLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.handleLoading(false));
  }
}

function* getDetailRoomSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getRoomDetailApi, payload);

    yield put(myPostActions.getDetailRoomSuccess(res.data));
    yield put(loadingActions.handleLoading(false));
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
  }
}

function* deleteRoomSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(deleteRoomApi, payload);
    if (res.status === 202) {
      yield put(myPostActions.deleteRoomSuccess(payload));
      yield put(loadingActions.setMessageSuccess("Delete success"));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingActions.setMessageError("Occur error!"));
  }
}

export function* myPostSaga() {
  yield takeEvery(myPostActions.getListRoomUser, getListRoomUserSaga);
  yield takeLatest(myPostActions.getDetailRoom, getDetailRoomSaga);
  yield takeLatest(myPostActions.deleteRoom, deleteRoomSaga);
}
