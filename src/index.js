import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducers from './reducers';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  applyMiddleware( ReduxThunk )
);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
