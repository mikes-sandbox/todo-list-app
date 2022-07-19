import { takeLatest, put, all, call } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';

import UserActionTypes from './user.types';
import { AUTH_SERVER_URL } from '../../common/config';
import { getUserDetails } from '../../services/auth.service';

import {
  signInSuccess,
  signInFailure,
  //   signOutSuccess,
  // signOutFailure,
  noUserDetected,
} from './user.actions';


export function* signInWithGoogle() {
  const browserHistory = createBrowserHistory();
  yield call(browserHistory.push, `${AUTH_SERVER_URL}/auth/google`);
}

export function* isUserAuthenticated() {
  try {
    const dbUser = yield call(getUserDetails);
    if (!dbUser)
      return yield put(noUserDetected());

    yield put(signInSuccess(dbUser));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// export function* signOut() {
//   try {
//     yield auth.signOut();
//     yield put(signOutSuccess());
//   } catch (error) {
//     yield put(signOutFailure(error));
//   }
// }

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// export function* onSignOutStart() {
//   yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
// }

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onCheckUserSession),
    // call(onSignOutStart),
  ]);
}
