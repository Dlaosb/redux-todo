import React from 'react';
import { render } from 'react-dom';
import store from './store.js';
import TodoContainer from './containers/todoContainer';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <TodoContainer />    
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();