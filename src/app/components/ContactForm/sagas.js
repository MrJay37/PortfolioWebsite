import { call, takeEvery, put } from "redux-saga/effects";
import rsf from "../../config/firebaseConfig";

export function* sendQueryFunction(action) {
  yield console.log(action);
  try {
    yield call(rsf.database.create, "/users", action.payload);
    yield put({ type: "MESSAGE_SUCCESS", payload: true });
  } catch (error) {
    yield put({ type: "MESSAGE_FAILURE", payload: true });
  }
}

function* watcherUserData() {
  yield takeEvery("SEND_QUERY", sendQueryFunction);
}

export default {
  watcherUserData,
};
