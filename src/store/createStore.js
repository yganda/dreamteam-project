import { createLogger } from 'redux-logger';
import { createStore as createReduxStore, applyMiddleware } from 'redux'
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

  const middleware = [routerMiddleware(history)];
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  return createReduxStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
    )
  );

/*  // Hot reloading
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }*/

};

export default createStore;
