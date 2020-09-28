import { all, fork } from "redux-saga/effects";
import userDataSaga from "../components/ContactForm/sagas";

export default function* rootSaga() {
  yield all([...Object.values(userDataSaga)].map(fork));
}
