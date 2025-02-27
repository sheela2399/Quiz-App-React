import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import http from "../../libraries/axios";

const apiUrl = `${ApiConstants.questionsApi}`

function* fetchQuestions() {
    try {
        const response = yield call(http.get, apiUrl);
        console.log({ response });
        yield put({ type: "FETCH_QUESTION_SUCCESS", payload: response.data });
    } catch (error) {
        yield put({ type: "FETCH_QUESTION_FAILURE", payload: error.message });
    }
}

function* addQuestions(action) {
    try {
        const response = yield call(http.post, apiUrl, actionChannel.payload)
        console.log({ response });
        yield put({ type: "ADD_QUESTION_SUCCESS", payload: response.data });
    } catch (error) {
        yield put({ type: "ADD_QUESTION_FAILURE", payload: error.message })
    }
}

function* deleteQuestions(action) {
    try {
        const response = yield call(http.delete, `${apiUrl}/${action.id}`)
        console.log(response);
        yield put({ type: "DELETE_QUESTION_SUCCESS", payload: response.data })
    } catch (error) {
        yield put({ type: "DELETE_QUESTION_FAILURE", payload: error.message })
    }
}

function* updateQuestion(action) {
    console.log(action.payload.id);
    try {
        const response = yield all(
            http.put, `${apiUrl}/${action.payload.id}`,
            action.payload
        );
        yield put({ type: "UPDATE_QUESTION_SUCCESS", payload: response.data });
    } catch (error) {
        yield put({ type: "UPDATE_QUESTION_FAILURE", payload: error.message });
    }
}

// Watchsaga
function* watchfetchQuestions() {
    yield takeLatest("FETCH_QUESTION_REQUEST", fetchQuestions);
}

function* watchaddQuestions() {
    yield takeLatest("ADD_QUESTION_REQUEST", addQuestions);
}

function* watchdeleteQuestions() {
    yield takeLatest("DELETE_QUESTION_REQUEST", deleteQuestions);
  }

function* watchupdateQuestion()  {
    yield takeLatest("UPDATE_QUESTION_REQUEST", updateQuestion)
}

// export all

export default function* questionSaga() {
    yield all([
        fork(watchfetchQuestions),
        fork(watchaddQuestions),
        fork(watchdeleteQuestions),
        fork(watchupdateQuestion)
    ])
}

