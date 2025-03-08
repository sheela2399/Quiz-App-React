import { all } from "redux-saga/effects";
import userSaga from "./User/userSaga";
import questionSaga from "./Questions/questionSaga";
import userTestSaga from "./UserTest/usertestSaga";

export default function* rootSaga() {
  yield all([userSaga(), questionSaga(), userTestSaga()]);
}