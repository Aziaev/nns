import 'assets/scss/material-kit-react.css?v=1.1.0';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './routes/Root';

// Development Only
// import hotReloadRoutes from './util/hotReloadRoutes';

// Local Variables
const rootEl = document.getElementById('root');


injectTapEventPlugin();
// 300ms response time fix for iOS

const renderApp = (RootComponent) => {
  ReactDOM.render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    rootEl,
  );
};
// render application method for instantiation and HMR.

renderApp(Root);
// instantiate the application

if (module.hot) {
  module.hot.accept([
    './routes/Root',
  ], () => {
    const NextRoot = require('./routes/Root').default; // eslint-disable-line global-require
    // require path is same as module hot path

    renderApp(NextRoot);
    // re-render the updated app
  });
}
