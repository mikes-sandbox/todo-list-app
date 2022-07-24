import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { getUserDetails } from '../../services/auth.service';

import {
  signInSuccess,
  signInFailure,
  noUserDetected,
} from './user.actions';

export function* isUserAuthenticated() {
  try {
    const dbUser = yield call(getUserDetails);
    if (!dbUser)
      return yield put(noUserDetected());

    yield put(signInSuccess(dbUser));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
  ]);
}
