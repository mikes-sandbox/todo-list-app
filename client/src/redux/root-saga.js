import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas';
import { todoSagas } from './todo/todo.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(todoSagas)
  ]);
}