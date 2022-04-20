import { call, put, takeEvery } from "redux-saga/effects";
import { getPlacesData } from "./apis";
import { viewMapActions } from "./viewMapSlice";

function* getPlacesSaga({ payload }) {
  try {
    const response = yield call(
      getPlacesData,
      payload.type,
      payload.sw,
      payload.ne
    );
    yield put(viewMapActions.getPlacesSuccess(response));
  } catch (error) {
    yield put(viewMapActions.getPlacesError());
  }
}

export function* viewMapSaga() {
  yield takeEvery(viewMapActions.getPlaces, getPlacesSaga);
}
