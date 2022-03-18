import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import {
  createNotificationApi,
  deleteNotificationApi,
  getListNotificationApi,
  getListNotificationNotReadApi,
  getTotalNotReaddNotificationApi,
  setReadedNotificationApi,
} from "./api";
import { notificationActions } from "./notificationSlice";

function* getListNotificationSaga() {
  try {
    const res = yield call(getListNotificationApi);
    if (res) {
      yield put(notificationActions.getListNotificationSuccess(res.data));
    }
  } catch (error) {
    yield put(notificationActions.getListNotificationError(error));
  }
}

function* createNotificationSaga({ payload }) {
  try {
    yield call(createNotificationApi(payload));
  } catch (error) {
    console.log(error);
  }
}

function* setReadedNotificationSaga({ payload }) {
  try {
    yield call(setReadedNotificationApi, payload);
  } catch (error) {
    console.log(error);
  }
}

function* getTotalNotificationsNotReadSaga() {
  try {
    const res = yield call(getTotalNotReaddNotificationApi);
    if (res) {
      yield put(
        notificationActions.getTotalNotificationsNotReadSuccess(res.data)
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function* getListNotificationNotReadSaga() {
  try {
    const res = yield call(getListNotificationNotReadApi);
    if (res) {
      yield put(notificationActions.getListNotificationSuccess(res.data));
    }
  } catch (error) {
    yield put(notificationActions.getListNotificationError(error));
  }
}

function* deleteNotificationSaga({ payload }) {
  try {
    const res = yield call(deleteNotificationApi, payload);
    if (res) {
      yield put(notificationActions.deleteNotificationSuccess(payload));
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* notificationSaga() {
  yield takeEvery(
    notificationActions.getListNotification,
    getListNotificationSaga
  );
  yield takeLatest(
    notificationActions.createNotification,
    createNotificationSaga
  );
  yield takeLatest(
    notificationActions.setReadedNotification,
    setReadedNotificationSaga
  );
  yield takeEvery(
    notificationActions.getTotalNotificationsNotRead,
    getTotalNotificationsNotReadSaga
  );
  yield takeLatest(
    notificationActions.getListNotificationNotRead,
    getListNotificationNotReadSaga
  );
  yield takeLatest(
    notificationActions.deleteNotification,
    deleteNotificationSaga
  );
}
