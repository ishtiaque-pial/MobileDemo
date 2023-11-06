import {createSlice} from '@reduxjs/toolkit';
import {Company} from '../../types/companyListType';
import companyListAsync from '../thunk/companyListThunk';

interface CompaniesListState {
  companies: Array<Company>;
  loading: boolean;
  error: string | null;
}

const initialState: CompaniesListState = {
  companies: [],
  loading: false,
  error: null,
};

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(companyListAsync.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(companyListAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
        state.error = null;
      })

      .addCase(companyListAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const selectCompaniesList = (state: {companies: CompaniesListState}) =>
  state.companies;
export default companySlice.reducer;
