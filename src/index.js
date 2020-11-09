import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { rootReducer } from './Redux/root-reducer';

import './Styles/sass/style.scss';

import App from './App.jsx';

const rootElement = document.getElementById('root');

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
  ),
));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement,
);
