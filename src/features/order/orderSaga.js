import { call, put, takeLatest } from "@redux-saga/core/effects";
import { loadingActions } from "features/loading/loadingSlice";
import { myPostActions } from "features/myPost/MyPostSlice";
import { refuseOrderApi } from "./api";
import { orderActions } from "./orderSlice";

function* confuseOrderSaga({ payload }) {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(refuseOrderApi, payload);
    if (res) {
      // console.log("res", res);
      yield put(myPostActions.getDetailRoomSuccess(res.data));
      yield put(loadingActions.setMessageSuccess("Xóa 1 order thành công!"));
      yield put(myPostActions.getListRoomUser());
    }
  } catch (error) {
    yield put(loadingActions.setMessageError("Đã xảy ra lỗi!"));
  }
}
export function* orderSaga() {
  yield takeLatest(orderActions.refuseOrder, confuseOrderSaga);
}
