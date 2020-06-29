import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { loginReducer } from './loginReducer';

const createRootReducer = (history) => combineReducers({
  login: loginReducer,
  router: connectRouter(history),
});

export default createRootReducer;
