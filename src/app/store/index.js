import { createStore, applyMiddleware } from "redux";
import createSageMiddleware from "redux-saga";
//import { createLogger } from 'redux-logger'
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export default function configureStore() {
  const sagaMiddleware = createSageMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware) //, loggerMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
