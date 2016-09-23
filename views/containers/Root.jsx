import React from 'react';
import { Provider } from 'react-redux';
import App from '../containers/App';
import DevTools from '../containers/DevTools';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default Root;