import { call, put, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { loadingActions } from "features/loading/loadingSlice";
import {
  createConversationApi,
  getConversationApi,
  getListConversationApi,
  getListMessageApi,
} from "./apis";
import { messageActions } from "./MessageSlice";

function* getMessageSaga(payload) {
  // console.log("payload", payload);
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getListMessageApi, payload);
    // console.log("res", res);
    if (res.data) {
      yield put(loadingActions.handleLoading(false));
      yield put(messageActions.getListMessgeSuccess(res.data.messages));
    }
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
    console.log(error);
  }
}

function* getConversationSaga({ payload }) {
  if (payload?.idUser !== payload?.idReceiver) {
    const conversation = yield call(getConversationApi, payload?.idReceiver);
    if (conversation?.data?._id) {
      yield put(
        messageActions.getConversationSuccess({
          idConversation: conversation?.data?._id,
          members: conversation?.data?.members,
        })
      );
      //get list messages
      yield getMessageSaga(conversation?.data?._id);
    } else {
      //create a new conversation
      const createConversation = yield call(
        createConversationApi,
        payload?.idReceiver
      );
      // console.log("createConversation", createConversation);
      yield put(
        messageActions.getConversationSuccess({
          idConversation: createConversation.data.conversation?._id,
          members: createConversation?.data?.conversation?.members,
        })
      );
      yield put(messageActions.getListMessgeSuccess([]));
    }
  }
}

function* getListConversationSaga() {
  try {
    yield put(loadingActions.handleLoading(true));
    const res = yield call(getListConversationApi);
    if (res) {
      yield put(messageActions.getListConversationSuccess(res.data));
      yield put(loadingActions.handleLoading(false));
    }
  } catch (error) {
    yield put(loadingActions.handleLoading(false));
  }
}

export function* messageSaga() {
  yield takeEvery(messageActions.getListConversation, getListConversationSaga);
  yield takeEvery(messageActions.getConversation, getConversationSaga);
}
