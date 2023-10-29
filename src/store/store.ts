import {combineReducers, configureStore} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import authReducer from './slices/authSlice';
import companyReducer from './slices/companiesSlice';
import companyDataReducer from './slices/companyDetailsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['companies', 'auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  companies: companyReducer,
  companyData: companyDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

/*const store = configureStore({
  reducer: {
    auth: authReducer,
    companies: companyReducer,
    companyData: companyDataReducer,
  },
});*/

export type RootState = ReturnType<typeof store.getState>;

export default store;
