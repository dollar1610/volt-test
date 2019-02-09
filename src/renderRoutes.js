import React, { Component } from 'react';

import { browserHistory, Route, Router } from 'react-router';
import routes from './routes';

import AppRoot from './containers/App/index';

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route component={AppRoot}>
      {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.main}
      />
      ))}
    </Route>
  </Router>
)

export default renderRoutes;
