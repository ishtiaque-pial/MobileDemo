import {configureStore} from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import companyReducer from './slices/companiesSlice';
import companyDataReducer from './slices/companyDetailsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    companies: companyReducer,
    companyData: companyDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
