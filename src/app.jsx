import React from 'react';
import ReactDOM from 'react-dom';

import RenderRoutes from './renderRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-select/dist/react-select.css';

import { Provider } from 'react-redux';
import configureStore from './store';

ReactDOM.render(
  <Provider store={configureStore}>
    <RenderRoutes />
  </Provider>,
  document.getElementById('app-root')
);
