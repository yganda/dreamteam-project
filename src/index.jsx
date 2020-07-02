import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import throttle from 'lodash/throttle';
import createStore from './store/createStore';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { loadState, saveState } from './utils/localStorage';

const appHistory = createBrowserHistory();
const persistedState = loadState();
const store = createStore(appHistory, persistedState);

store.subscribe(throttle(() => {
  saveState({
    userAccount: store.getState().userAccount,
  });
}), 1000);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={appHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
