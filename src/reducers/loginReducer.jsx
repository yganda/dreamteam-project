// example
import { LOGIN_ACTION_TYPES } from '../actions/loginActions';

const initialState = {
  something: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.BUTTON_CLICKED:
      return state;
    default:
      return state;
  }
};
