import fakeAuth from 'fake-auth';

// action types
export const SIGN_IN_ACTION_TYPES = {
  SIGN_UP_USER_BEGIN: 'SIGN_UP_USER_BEGIN',
  SIGN_UP_USER_SUCCESS: 'SIGN_UP_USER_SUCCESS',
  SIGN_UP_USER_FAILURE: 'SIGN_UP_USER_FAILURE',
  SIGN_IN_USER_BEGIN: 'SIGN_IN_USER_BEGIN',
  SIGN_IN_USER_SUCCESS: 'SIGN_IN_USER_SUCCESS',
  SIGN_IN_USER_FAILURE: 'SIGN_IN_USER_FAILURE',
  SIGN_OUT_USER_BEGIN: 'SIGN_OUT_USER_BEGIN',
  SIGN_OUT_USER_SUCCESS: 'SIGN_OUT_USER_SUCCESS',
  SIGN_OUT_USER_FAILURE: 'SIGN_OUT_USER_FAILURE',
};

// actions
export const signUpUserBegin = () => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_UP_USER_BEGIN,
});

export const signUpUserSuccess = (auth) => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_UP_USER_SUCCESS,
  auth,
});

export const signUpUserFailure = (error) => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_UP_USER_FAILURE,
  error,
});

export const signInUserBegin = () => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_IN_USER_BEGIN,
});

export const signInUserSuccess = (user) => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_IN_USER_SUCCESS,
  user,
});

export const signInUserFailure = (error) => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_IN_USER_FAILURE,
  error,
});

export const signOutUserBegin = () => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_OUT_USER_BEGIN,
});

export const signOutUserSuccess = () => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_OUT_USER_SUCCESS,
});

export const signOutUserFailure = (error) => ({
  type: SIGN_IN_ACTION_TYPES.SIGN_OUT_USER_FAILURE,
  error,
});

// <---  FAKE AUTH  --->
// <---FOR DEMO ONLY--->
export const signInUser = (email, password) => dispatch => {
  dispatch(signInUserBegin());
  return fakeAuth
    .signin(email, password)
    .then(({ user }) => dispatch(signInUserSuccess(user)))
    .catch(error => dispatch(signInUserFailure(error)));
};

export const signOutUser = () => dispatch => {
  dispatch(signOutUserBegin());
  return fakeAuth
    .signout()
    .then(() => dispatch(signOutUserSuccess()))
    .catch(error => dispatch(signOutUserFailure(error)))
};

