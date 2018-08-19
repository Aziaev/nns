import { createBrowserHistory } from 'history';
import React, { Component, } from 'react';
import { Route, Router, Switch } from 'react-router';
import indexRoutes from 'routes/index.jsx';

const hist = createBrowserHistory();

class Root extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Router history={hist}>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route path={prop.path} key={key} component={prop.component} />;
          })}
        </Switch>
      </Router>
    );
  }
}

export default Root;
