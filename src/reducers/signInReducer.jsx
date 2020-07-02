import { SIGN_IN_ACTION_TYPES } from '../actions/signInActions';

const initialState = {
  authError: null,
  user: null,
  signOutError: null
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_ACTION_TYPES.SIGN_UP_USER_SUCCESS:
      return { ...state }; //
    case  SIGN_IN_ACTION_TYPES.SIGN_UP_USER_FAILURE:
      return { ...state }; //
    case SIGN_IN_ACTION_TYPES.SIGN_IN_USER_SUCCESS:
      return { ...state, user: action.user };
    case SIGN_IN_ACTION_TYPES.SIGN_IN_USER_FAILURE:
      return { ...state, authError: action.error };
    case SIGN_IN_ACTION_TYPES.SIGN_OUT_USER_SUCCESS:
      return { ...state, user: null }
    case SIGN_IN_ACTION_TYPES.SIGN_OUT_USER_FAILURE:
      return { ...state, signOutError: action.error }
    default:
      return state;
  }
};
