import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../Redux/root-reducer';
import App from '../App';
import React from 'react';
import '../Styles/sass/style.scss';

export default function AppNext({ Component, props }) {
    const store = createStore(rootReducer, compose(
        applyMiddleware(
          thunk
        )
      ))

  return (
    <Provider store={store}>
      <App>
        <Component {...props} />
      </App>
    </Provider>
  );
}