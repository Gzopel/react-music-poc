import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

if (module.hot) {
  module.hot.accept();
}

const store = configureStore();

render((
    <Root store={store}/>
  ),
  document.getElementById('app'));
