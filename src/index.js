import React from "react";
import { render } from 'react-dom';
import './index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from '@/components/App';
import reducers from '@/reducers'


const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  )
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)