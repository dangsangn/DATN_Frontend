import { delay, put, takeEvery } from "redux-saga/effects";
import { loadingActions } from "./loadingSlice";

function* setMessageSuccessSaga() {
  yield delay(2000);
  yield put(loadingActions.closeMessage());
}
function* setMessageErrorSaga() {
  yield delay(2000);
  yield put(loadingActions.closeMessage());
}
export function* loadingSaga() {
  yield takeEvery(loadingActions.setMessageSuccess, setMessageSuccessSaga);
  yield takeEvery(loadingActions.setMessageError, setMessageErrorSaga);
}
