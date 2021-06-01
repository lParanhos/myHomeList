import React from 'react';

import Routes from './routes';

import {Provider} from 'mobx-react';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
