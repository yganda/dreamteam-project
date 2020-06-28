import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createStore from './store/createStore';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import routes from './config/routes';

const appHistory = createBrowserHistory();
const store = createStore(appHistory);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <App>
          { routes }
        </App>
      </Router> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
