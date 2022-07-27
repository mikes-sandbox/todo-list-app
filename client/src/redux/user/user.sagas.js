import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { httpGetUserDetails, httpSignOutUser } from '../../services/auth.service';
import { purgeTodos } from '../todo/todo.actions';

import {
  signInSuccess,
  signInFailure,
  noUserDetected,
  signOutSuccess,
  signOutFailure,
} from './user.actions';

export function* isUserAuthenticated() {
  try {
    const dbUser = yield call(httpGetUserDetails);
    if (!dbUser)
      return yield put(noUserDetected());

    yield put(signInSuccess(dbUser));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signOutUser() {
  try {
    yield call(httpSignOutUser);
    yield put(purgeTodos());
    yield put(signOutSuccess());
  } catch (error) {
    console.log(error);
    yield put(signOutFailure(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutUser);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
