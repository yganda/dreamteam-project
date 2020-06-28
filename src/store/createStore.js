import { createLogger } from 'redux-logger';
import { createStore as createReduxStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { mapToRootReducer } from '../reducers';

const createStore = (history, initialState = {}) => {
  const logger = createLogger({
    collapsed: true,
    logErrors: false,
  });
  const composeEnhancers = composeWithDevTools({});

  const middleware = [];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  return createReduxStore(
    mapToRootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
    )
  );
};

export default createStore;
