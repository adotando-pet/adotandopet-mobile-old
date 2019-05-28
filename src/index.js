import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import { setNavigator } from '~/services/navigation';

import Routes from '~/navigator';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Routes ref={setNavigator} />
    </PersistGate>
  </Provider>
);

export default App;
