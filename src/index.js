import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import { setNavigator } from '~/services/navigation';

import Routes from '~/navigator';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
