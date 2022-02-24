import { roomSaga } from "features/room/roomSaga";
import { loginSaga } from "features/login/loginSaga";
import { registerSaga } from "features/register/RegisterSaga";
import { loadingSaga } from "features/loading/loadingSaga";
import { all } from "redux-saga/effects";
import { userSaga } from "features/user/userSaga";
import { roomDetailSaga } from "features/roommate/roomDetailSaga";
import { messageSaga } from "features/messages/MessageSaga";
import { userAdminSaga } from "features/admin/user/userAdminSaga";
import { roomAdminSaga } from "features/admin/room/roomAdminSaga";
import { myPostSaga } from "features/myPost/MyPostSaga";
import { orderSaga } from "features/order/orderSaga";

export function* mySaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    roomSaga(),
    loadingSaga(),
    userSaga(),
    roomDetailSaga(),
    messageSaga(),
    userAdminSaga(),
    roomAdminSaga(),
    myPostSaga(),
    orderSaga(),
  ]);
}
