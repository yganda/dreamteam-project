import { createLogger } from 'redux-logger';
import { createStore as createReduxStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';

const createStore = (history, initialState = {}) => {
  const composeEnhancers = composeWithDevTools({});
  /* middleware */
  const logger = createLogger({
    collapsed: true,
    logErrors: false,
  });

  const middleware = [routerMiddleware(history), thunk];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  const store = createReduxStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
    )
  );

  // Hot reloading
  if(module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default createStore;
