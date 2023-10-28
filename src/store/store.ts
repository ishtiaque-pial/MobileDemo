import {configureStore} from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import companyReducer from './slices/companiesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    companies: companyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
