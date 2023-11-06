import {createSlice} from '@reduxjs/toolkit';
import {GetCompany} from '../../types/companyDetails';
import companyDetailsAsync from '../thunk/companyDetailsThunk';

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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(companyDetailsAsync.pending, state => {
        state.loading = true;
        state.errorData = null;
      })
      .addCase(companyDetailsAsync.fulfilled, (state, action) => {
        state.companyData = action.payload;
        state.loading = false;
        state.errorData = null;
      })

      .addCase(companyDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.errorData = action.error.message || 'An error occurred';
      });
  },
});

export const selectCompaniesData = (state: {companyData: CompanyDataState}) =>
  state.companyData;
//export const {fetchData, fetchError, fetchLoading} = companyDataSlice.actions;
export default companyDataSlice.reducer;
