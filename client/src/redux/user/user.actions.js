import UserActionTypes from './user.types';

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
});

export const noUserDetected = () => ({
  type: UserActionTypes.NO_USER_DETECETD
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const userUnauthorised = error => ({
  type: UserActionTypes.USER_UNAUTHORISED,
  payload: error
});

