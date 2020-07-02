import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { modalReducer } from './modalReducer';
import { signInReducer } from './signInReducer';

const createRootReducer = (history) => combineReducers({
  modal: modalReducer,
  router: connectRouter(history),
  userAccount: signInReducer,
});

export default createRootReducer;
