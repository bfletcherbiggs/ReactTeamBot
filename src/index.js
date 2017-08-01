/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
import configureStore from './store/configureStore';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Anton Web:300,400,700', 'sans-serif']
  }
});


require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

const store = configureStore();

render(
  <AppContainer>
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NewRoutes = require('./routes').default;
    render(
      <AppContainer>
        <BrowserRouter>
          <Provider store={store}>
            <NewRoutes />
          </Provider>
        </BrowserRouter>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
