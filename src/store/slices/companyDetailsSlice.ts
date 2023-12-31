import {createSlice} from '@reduxjs/toolkit';
import {GetCompany} from '../../types/companyDetails';

interface CompanyDataState {
  companyData: GetCompany | null;
  loading: boolean;
  errorData: string | null;
}

const initialState: CompanyDataState = {
  companyData: null,
  loading: false,
  errorData: null,
};

const companyDataSlice = createSlice({
  name: 'companyData',
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.companyData = action.payload;
      state.loading = false;
      state.errorData = null;
    },
    fetchLoading: state => {
      state.loading = true;
      state.errorData = null;
    },
    fetchError: (state, action) => {
      state.errorData = action.payload;
      state.loading = false;
    },
  },
});

export const selectCompaniesData = (state: {companyData: CompanyDataState}) =>
  state.companyData;
export const {fetchData, fetchError, fetchLoading} = companyDataSlice.actions;
export default companyDataSlice.reducer;
