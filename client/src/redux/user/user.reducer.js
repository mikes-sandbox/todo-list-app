import UserActionTypes from './user.types';

const INITIAL_STATE = {
  isLoading: true,
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.NO_USER_DETECETD:
      return {
        ...state,
        isLoading: false
      };


    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
        error: null
      };


    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };


    case UserActionTypes.USER_UNAUTHORISED:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        error: "401: Unauthorised..."
      };

    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        isLoading: false,
        currentUser: null,
        error: null
      };

    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };


    default:
      return state;
  }
};

export default userReducer;
