import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import repoReducer from './reducers/repoReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import './index.css';

import App from './App';
const store = createStore(repoReducer, devToolsEnhancer())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

