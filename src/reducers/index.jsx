import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer } from './loginReducer';

export const mapToRootReducer = (history) => combineReducers({
  login: loginReducer,
  router: connectRouter(history),
});
