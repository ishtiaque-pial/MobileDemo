import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigation from './routes';
import store, {persistor} from './store';

export const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </PersistGate>
  );
};
