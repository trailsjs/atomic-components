// Globals
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Components
import TrailsMix from './components/environments/TrailsMix';

// Utils
import configureStore from './utils/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <TrailsMix />
  </Provider>,
  document.getElementById('root'));