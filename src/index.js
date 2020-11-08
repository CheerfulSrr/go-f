import React from "react";
import { render } from 'react-dom';
import './index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from '@/components/App';
import reducers from '@/reducers'


const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)