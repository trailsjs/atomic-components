import React from 'react';
import { render } from 'react-dom';
import TrailsMix from './components/environments/TrailsMix';
import { Provider } from 'react-redux';
import configureStore from './utils/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <TrailsMix />
  </Provider>,
  document.getElementById('root'));