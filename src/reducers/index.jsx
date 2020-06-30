import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { modalReducer } from './modalReducer';

const createRootReducer = (history) => combineReducers({
  modal: modalReducer,
  router: connectRouter(history),
});

export default createRootReducer;
